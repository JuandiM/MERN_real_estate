const express = require ('express');
const router = require ('express').Router ();
const dotenv = require ('dotenv');
const properties = require ('./routes/properties');

const app = express ();

//DB CONNECTION
const mongoose = require ('mongoose');

mongoose
  .connect ('mongodb://localhost/properties_web_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then (() => console.log ('Connected to MongoDB'))
  .catch (error => console.log (error));

//Cors
const cors = require ('cors');
app.use (cors ());

//Model
const Property = require ('./models/Property.model');

//Routing
app.use ('/api/properties', properties);

/*app.get ('/api/properties', (req, res) => {
  Property.find ().then (allProperties => res.json (allProperties));
});

 app.get ('/api/details/:property_id', (req, res) => {
  const {property_id} = req.params;
  Property.findById (property_id).then (property => res.send (property));
}); */

app.listen (5000, () => console.log ('SERVER running'));
