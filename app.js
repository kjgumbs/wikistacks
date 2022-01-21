const { db } = require('./models');
const wiki = require('./routes/wiki');
//const users= require('./routes/users');
const { app } = require('express');

app.use('/wiki',wiki);

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
