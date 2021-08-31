const camera = new Camera($('#player')[0]);

const _init = () => {

    const messages = new Message();
    window.addEventListener('messages_error', () => {
        toastr.error('Messages could not be retrieved.<br>Will keep trying.', 'Network Connection Error');
    });

    window.addEventListener('messages_ready', () => {
        $('#loader').remove();

        if (messages.all.length == 0) {
            toastr.info('Add the first message.', 'No Messages');
        }

        $('#messages').empty();

        messages.all.reverse().forEach(renderMessage);
    })

    window.addEventListener('new_message', e => {
        renderMessage(e.detail);
    })

    $('#viewfinder').on('show.bs.modal', () => {
        camera.switch_on();
    });
    
    $('#viewfinder').on('hidden.bs.modal', () => {
        camera.switch_off();
    });

    $('#shutter').on('click', () => {
        let photo = camera.take_photo();

        $('#camera').css('background-image', `url(${photo})`).addClass('withphoto');
    });

    $('#send').on('click', () => {
        let caption = $('#caption').val();
        if (!camera.photo || !caption) {
            toastr.warning('Photo & Caption Required.', 'Incomplete Message');
            return;
        }

        let message = messages.add(camera.photo, caption);
        console.log(messages.all);

        renderMessage(message);

        $('#caption').val('');
        $('#camera').css('background-image', '').removeClass('withphoto');
        camera.photo = null;
    })
}

const renderMessage = (message) => {
    let msgHtml = `
    <div style="display: none;" class="row message bg-light mb-2 rounded shadow">
        <div class="col-2 p-1">
            <img src="${message.photo}" alt="${message.caption}" class="photo w-100 rounded">
        </div>
        <div class="col-10 p-1">${message.caption}</div>
    </div>`;

    $(msgHtml).prependTo('#messages')
        .show(500)
        .find('img').on('click', showPhoto);
}

const showPhoto = (e) => {
    let photoSrc = $(e.currentTarget).attr('src');
    let photoAlt = $(e.currentTarget).attr('alt');

    $('#photoframe img').attr('src', photoSrc);
    $('#photoframe img').attr('alt', photoAlt);
    $('#photoframe').modal('show');
}