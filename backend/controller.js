const { Brewery, Review } = require('./model');

exports.searchBreweries = async (req, res) => {
  try {
    let query = {};
    if (req.query.by_city) {
      query.city = req.query.by_city;
    } else if (req.query.by_name) {
      query.name = req.query.by_name;
    } else if (req.query.by_type) {
      query.brewery_type = req.query.by_type;
    }
    const breweries = await Brewery.find(query);
    res.json(breweries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createReview = async (req, res) => {
  try {
    const review = new Review({
      brewery_id: req.body.brewery_id,
      user_id: req.user.id,
      rating: req.body.rating,
      description: req.body.description,
    });
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};