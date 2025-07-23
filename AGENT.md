# Jynx SaaS Development Guide

## Commands
- **Test**: `npm test` (currently not implemented - returns error message)
- **Dev Server**: `nodemon` (run from backend/dev/ directory)
- **Run Backend**: `node server.js` (from backend/ directory)

## Architecture
- **Monorepo**: Root contains `backend/`, `mobile/` directories  
- **Backend**: Node.js/Express with PostgreSQL, Sequelize ORM (main code in `backend/dev/`)
- **Mobile**: React Native (files in `mobile/src/` but mostly empty)
- **Database**: PostgreSQL, config in `backend/dev/config/database.js`
- **Real-time**: Socket.io for live chat functionality

## Code Style
- **JavaScript**: Pure JS (no TypeScript), CommonJS modules (`require()`/`module.exports`)
- **Imports**: Use destructuring (`const { Sequelize } = require('sequelize')`)
- **Error Handling**: Promise-based with `.then()/.catch()`, console logging
- **Database**: Sequelize models and authentication patterns
- **Security**: bcryptjs for password hashing, dotenv for environment variables

## Key Dependencies
- Backend: Express, PostgreSQL, Sequelize, Socket.io, bcryptjs
- Dev: nodemon for development server

**Note**: Testing framework not yet set up - backend/tests/ directory exists but is empty.
