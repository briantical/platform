# THE PLATFORM: server

## About

This folder contains the code that runs the backend of the platform. The backend is built using the Express framework and Typescript. Sequelize is the ORM used to access and a manipulate the database.

## Folder Structure

The entirety of the code is within the `src` folder.

- `config` - defines the database configuration developments and environments for the app
- `migration` - defines the databases migrations for the corresponding models.
- `models` - defines the database tables used in the application
- `routers` - defines the routes and api endpoints
- `controllers` - defines the functions to query and update the database.

Use the `.env.example` to set the required environment variables.

## Testing

Download [postman](https://www.postman.com/) to test the different API endpoints.

Available endpoints:

- `/api/v1/applications/apply` - create and update an application for a specific role
- `/api/v1/applications/<application_id>` - fetch particular application using its id
- `/api/v1/users/<user_id>` - fetch particular user using its id

### Resources:

- Express framework [here](https://expressjs.com/)
- Typescript [here](https://www.typescriptlang.org/)
- Sequelize [here](https://sequelize.org/)
