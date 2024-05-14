const mongoose = require('mongoose');

const brewerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  brewery_type: {
    type: String,
    required: true,
  },
});

const reviewSchema = new mongoose.Schema({
  brewery_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brewery',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = {
  Brewery: mongoose.model('Brewery', brewerySchema),
  Review: mongoose.model('Review', reviewSchema),
};