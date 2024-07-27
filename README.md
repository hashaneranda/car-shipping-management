# Car Shipping Management System

## What's inside

- [Backend]- nestjs
- [Frontend]- react

For code quality:

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

## Getting Started

### Installation

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
