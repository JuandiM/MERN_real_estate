const express = require ('express');
const router = require ('express').Router ();
const dotenv = require ('dotenv').config ();
const properties = require ('./routes/properties');

//Cors
const cors = require ('cors');
const app = express ();

app.use (cors ());

//DB CONNECTION
const mongoose = require ('mongoose');

mongoose
  .connect (process.env.MONGODB_URL, {useNewUrlParser: true})
  .then (() => console.log ('connected to Mongo'))
  .catch (err => console.log (err));
/* mongoose
.connect ('mongodb://localhost/properties_web_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then (() => console.log ('Connected to MongoDB'))
.catch (error => console.log (error)); */

//Model
const Property = require ('./models/Property.model');

//Routing
app.use ('/api/properties', properties);

//Path module
const path = require ('path');

app.use (express.static (path.join (__dirname, 'client/build')));

app.get ('*', (req, res) => {
  res.sendFile (path.join (__dirname, './client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen (PORT, () => console.log ('SERVER running'));
