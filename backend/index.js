'use strict'

const mongoose = require('../backend/src/services/mongoose');
const app = require('../backend/src/services/express');

// start app and connect to database
app.start()
mongoose.connect()

module.exports = app
