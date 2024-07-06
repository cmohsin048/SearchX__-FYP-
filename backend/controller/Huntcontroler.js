const express = require('express');
const Product = require('../modal/Products');

const GetHuntProducts = async (req, res) => {
    try {
        const {
            category,
            minPrice,
            maxPrice,
            reviews,
            Rating,
            Total_sales,
            Thirty_day_sales,
            Brand
        } = req.query; // Use req.query for GET request parameters

        console.log('Received parameters:', {
            category,
            minPrice,
            maxPrice,
            reviews,
            Rating,
            Total_sales,
            Thirty_day_sales,
            Brand
        });

        // Build the query object based on the provided parameters
        const query = {};

        if (category && category !== 'All Categories') {
            query.category = category;
        }

        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = parseInt(minPrice, 10);
            if (maxPrice) query.price.$lte = parseInt(maxPrice, 10);
        }

        if (reviews) query.reviews = { $gte: parseInt(reviews, 10) };
        if (Rating) query.Rating = { $gte: parseInt(Rating, 10) };
        if (Total_sales) query.Total_sales = { $gte: parseInt(Total_sales, 10) };
        if (Thirty_day_sales) query.Thirty_day_sales = { $gte: parseInt(Thirty_day_sales, 10) };
        if (Brand) {
            query.Brand = { $regex: new RegExp(Brand.trim(), 'i') }; // Case-insensitive regex
        }

        const items = await Product.find(query);

        if (items.length === 0) {
            console.log('No products found');
            // return res.status(404).json({ error: 'No products found' });
            return res.json({ error: 'No products found' });

        }

        console.log('Found products:', items.length);
        res.json(items);
    } catch (error) {
        console.error('Error fetching products:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid query parameters' });
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { GetHuntProducts };
