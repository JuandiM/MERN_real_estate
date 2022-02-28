const mongoose = require ('mongoose');

const PropertySchema = new mongoose.Schema (
  {
    ref: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    carouselImg: {
      img1: {type: String},
      img2: {type: String},
      img3: {type: String},
    },

    features: {
      bedrooms: {type: String},
      bath: {type: String},
      built: {type: String},
      terrace: {type: String},
      plot: {type: String},
    },

    gallery: {
      img1: {type: String},
      img2: {type: String},
      img3: {type: String},
      img4: {type: String},
      img5: {type: String},
      img6: {type: String},
    },

    price: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

const Property = mongoose.model ('properties', PropertySchema);

module.exports = Property;
