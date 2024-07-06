const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Invalid token format" });
    }

    // Extract the token (remove "Bearer " from the beginning)
    const tokenWithoutBearer = token.split(" ")[1];

    try {
        const decodedToken = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET, {
            ignoreExpiration: false, // Set to true if you don't want to check expiration
            issuer: "your_issuer_name" // Verify the issuer
        });

        req.user = decodedToken;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ error: "Token expired" });
        }
        return res.status(401).json({ error: "Invalid token" });
    }
};

module.exports = authenticateUser;
