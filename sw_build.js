const { generateSW } = require('workbox-build');

generateSW({
    swDest: 'app/sw.js',
    globDirectory: 'app',
    globPatterns: [
        '**/*.{html,css}',
        'main.js',
        'Classes/*.js'
    ],
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
        {
            urlPattern: /\.(css|js)/,
            handler: 'CacheFirst'
        }, {
            urlPattern: /^https:\/\/use\.fontawesome\.com.*/,
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'fontawesome'
            }
        }
    ],
    sourcemap: false
}).then(({count, size}) => {
    console.log(`Count: ${count}. Size: ${size}`)
}).catch(console.error);