const Product= require('../modal/Products')
const Getproduct = async (req, res) => {
    try {
        const { product_id } = req.params; // Get product_id from req.params
        console.log('Received product_id:', product_id);

        const item = await Product.findOne({ product_id: product_id });

        if (!item) {
            // Product not found
            console.log('Product not found');
            return res.status(404).json({ error: 'Product not found' });
        }

        console.log('Found product:', item);
        res.json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



module.exports={Getproduct}