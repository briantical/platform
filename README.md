# THE PLATFORM

## About

This a web application for storing information about job candidates. The application
consists of separate back-end service (`server`) with API endpoint(s) and separate front-end application (`client`) that utilizes this back-end API endpoint(s).

## Folder Structure

The project consists of two folders ie `server` that contains all the files corresponding
to the server code and `client` that contains the front facing wep application.

Each respective folder has a respective `README.md` file to explain the tech stack and implementation choices taken.

- Client documentation [here](./client/README.md)
- Server documentation [here](./server/README.md)

The root directory also contains the `package-lock.json` and `package.json` that defines the scripts /commands to run the entire application.

## Running the project

To run the project locally, run the following commands using the terminal

- Installing the dependencies for the respective apps. Change to the respective directories and run the commands `npm install` and `yarn install` for the server and client applications respectively.
- Run `npm run dev` to start both the applications. This should be done in the root directory.
  The console should output the endpoints /urls at which the applications are running. by default, the server will run at `http://localhost:8080` and client at `http://localhost:3000/`

# Deliverables

The other deliverables are available via the [here](./docs/README.md)
