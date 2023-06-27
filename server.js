const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection,js');

// Create our Express app
const app = express();