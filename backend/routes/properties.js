const router = require ('express').Router ();
const Property = require ('../models/Property.model');

/* //CREATE PROPERTY
router.post ('/', async (req, res) => {
  const newProperty = new Property (req.body);
  try {
    const savedProperty = await newProperty.save ();
    res.status (200).json (savedProperty);
  } catch (error) {
    res.status (500).json (error);
  }
});

//UPDATE PROPERTY
router.put ('/:id', async (req, res) => {
  try {
    const property = await Property.findById (req.params.id);
    if (property.username === req.body.username) {
      try {
        const updatedProperty = await Property.findByIdAndUpdate (
          req.params.id,
          {$set: req.body},
          {new: true}
        );
        res.status (200).json (updatedProperty);
      } catch (error) {
        res.status (500).json (error);
      }
    } else {
      res.status (401).json ('You are not allowed');
    }
  } catch (error) {
    res.status (500).json (error);
  }
});

//DELETE PROPERTY
router.delete ('/:id', async (req, res) => {
  try {
    const property = await Property.findById (req.params.id);
    if (property.username === req.body.username) {
      try {
        await Property.findByIdAndDelete (req.params.id);
        res.status (200).json ('Property removed');
      } catch (error) {
        res.status (500).json (error);
      }
    } else {
      res.status (401).json ('You are not allowed to delete');
    }
  } catch (error) {
    res.status (500).json (error);
  }
}); 
*/
//GET PROPERTY
router.get ('/:id', async (req, res) => {
  try {
    const property = await Property.findById (req.params.id);
    res.status (200).json (property);
    //console.log (req.params.id);
  } catch (error) {
    res.status (500).json (error);
  }
});

//GET ALL PROPERTIES
router.get ('/', async (req, res) => {
  try {
    const properties = await Property.find ();
    res.status (200).json (properties);
  } catch (error) {
    res.status (500).json (error);
  }
});

module.exports = router;
