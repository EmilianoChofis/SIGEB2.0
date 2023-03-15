// getting-started.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/carsi',
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Conectado a la base de datos")).catch(err => console.log(err));

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled