const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const authRoutes = require('./authRoutes');
const cors = require('cors');
const axios = require('axios');
const authController = require('./authController');

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

mongoose.connect('mongodb+srv://ayamchug:ayamchug24@assignment.hzy46gc.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use(express.json());

  
  // Your API routes and middleware
  app.get('/api/data', (req, res) => {
    res.json({ message: 'Data from the backend' });
  });

app.post('/api/signup', authController.signup);
app.post('/api/login', authController.login);
app.use(cors());
app.post('/api/reviews', async (req, res) => {
    try {
        const { brewery_id, rating, description } = req.body;
        const response = await axios.post('https://api.openbrewerydb.org/reviews', {
            brewery_id,
            rating,
            description,
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error submitting review:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});