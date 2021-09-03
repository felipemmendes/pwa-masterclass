# Learning PWA concepts
This application was created in the course: [Progressive Web Apps: The Concise PWA Masterclass](https://www.udemy.com/course/progressive-web-apps/).

In this app you can take pictures, give then a caption, and send to the server. The server will then send updates to all subscribed sockets.

## What I've learned

* Concepts, challenges and application of Progressive Web Apps
* Service Workers
* Push Notifications in PWA
* Caching strategies
* App's Manifest
* Creating a PWA with Workbox

## Wanna try?

To run the server in development mode you will need npm or yarn installed in your computer.

1. Clone the repository
   ```sh
   git clone https://github.com/felipemmendes/pwa-masterclass.git
   ```
2. Go to repository directory and install NPM packages

   ```sh
   npm install
   ```

   or

   ```sh
   yarn
   ```

3. Create a new Workbox Service Worker

   ```sh
   npm run build
   ```

   or

   ```sh
   yarn build
   ```

4. Start the server in development mode

   ```sh
   npm run start
   ```

   or

   ```sh
   yarn start
   ```

   Server will run on http://localhost:8000 and files uploaded will be saved on server/db.json
