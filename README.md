# Car Shipping Management System

## What's inside

- [Backend]- nestjs - https://car-shipping-management.onrender.com/api
- [Frontend]- react - https://car-shipping-management.vercel.app/

## Project Architecture

![alt text](https://github.com/hashaneranda/car-shipping-management/blob/main/architecture.png?raw=true)

## Project Flow Chart

![alt text](https://github.com/hashaneranda/car-shipping-management/blob/main/flow-chart.png?raw=true)

For code quality:

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/hashaneranda/car-shipping-management.git
   cd car-shipping-management
   ```

### Running the Project

1. **Build and run the Docker containers**

   ```sh
   docker-compose up --build
   ```

2. **Access the frontend and backend**

   - Frontend: Open your browser and navigate to http://localhost
   - Backend: Access the Swagger documentation at http://localhost:3000/api.

## Project Structure

```
car-frontend\          # Frontend - APP
 |--src\
    |--app\            # Application main layout, redux store, root reducers, root saga
    |--assets\         # Assets
    |--common\         # common Compoenents and utilities
    |--config\         # Configrations of the app (Constants, Images links)
    |--feature\        # Redux Slices, Sagas , Watchers
    |--pages\          # App pages
    |--index.js        # react app - app entry point

car-shipping\          # Backend - APP
 |--src\
    |--auth\           # Auth module
    |--feature\        # Features
        |--cache\      # Cache module
        |--car\        # Car module
        |--user\       # User module
    |--schemas\        # DB schemas
    |--main.js         # nest app - app entry point
```
