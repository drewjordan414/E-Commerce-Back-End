// housekeeping
// require('dotenv').config();
// const Sequelize = require('sequelize');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import your API routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
