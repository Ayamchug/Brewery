const jwt = require('jsonwebtoken');
const User = require('./userModel');

// Example middleware functions

// Middleware function to log requests
const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

// Middleware function to handle authentication
const authenticate = async (req, res, next) => {
    // Check for a valid token in the request headers
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token not provided' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, 'your-secret-key');

        // Find the user based on the decoded user ID
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        }

        // Add user information to the request object
        req.user = {
            id: user._id,
            username: user.username,
            // Add any other relevant user information
        };

        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
};

module.exports = { requestLogger, authenticate };