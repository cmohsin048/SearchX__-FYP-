import React, { useState } from 'react';
import axios from 'axios';

const Crawler = () => {
  const [url, setUrl] = useState('');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(''); // State to store the error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split('-');
      const productIdPart = pathParts.find(part => part.startsWith('i'));
      if (productIdPart) {
        let product_id = productIdPart.slice(1);
        const response = await axios.get(`http://localhost:3200/app/Cr/${product_id}`);
        if (response.data) {
          setProduct(response.data);
          setError('');
          setUrl(''); // Clear any previous error message
        } else {
          setProduct(null);
          setUrl('');
          setError('No product found with this URL');
        }
      } else {
        setProduct(null);
        setUrl('');
        setError('Invalid product URL');
      }
      setUrl('');
    } catch (error) {
      // console.error('Error processing URL:', error);
      setProduct(null);
      setUrl('');
      setError('Error processing URL');
    }
  };

  return (
    <div className='crawler'>
      <h1>Enter Your Product URL Here for Detailed Information</h1>
      <form onSubmit={handleSubmit}>
        <div className='crawler-inputs'>
          <input
            className='url-input'
            type='url'
            value={url}
            placeholder='Paste your URL here'
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type='submit' className='crawler-button'>
            Get Product
          </button>
        </div>
      </form>
      {error && <div className='error-message'>{error}</div>}
      {product && (
        <div className='product-card'>
          <table>
            <tbody>
              <tr>
                <th>Title</th>
                <td><a href={product.url} target='_blank' rel='noopener noreferrer'>{product.Title}</a></td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{product.price}</td>
              </tr>
              <tr>
                <th>Brand</th>
                <td>{product.brand ? product.brand : 'No Brand'}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{product.category}</td>
              </tr>
              <tr>
                <th>Sub Category</th>
                <td>{product.sub_category}</td>
              </tr>
              <tr>
                <th>Product ID</th>
                <td>{product.product_id}</td>
              </tr>
              <tr>
                <th>SKU</th>
                <td>{product.sku}</td>
              </tr>
              <tr>
                <th>Delivery Fee</th>
                <td>{product.delivery_fee}</td>
              </tr>
              <tr>
                <th>Total Sales</th>
                <td>{product.Total_sales}</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td>{product.Rating}</td>
              </tr>
              <tr>
                <th>Reviews</th>
                <td>{product.reviews}</td>
              </tr>
              <tr>
                <th>Thirty-day Sales</th>
                <td>{product.Thirty_day_sales}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Crawler;
