import React, { useState } from 'react';
import axios from 'axios';

const Hunt = () => {
  const [category, setCategory] = useState('All Categories');
  const [minRating, setMinRating] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [minSales, setMinSales] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minMonthlySales, setMinMonthlySales] = useState('');
  const [minReviewCount, setMinReviewCount] = useState('');
  const [brand, setBrand] = useState('');
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [requestMade, setRequestMade] = useState(false); // State to track if a request has been made

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the rating value
    if (minRating < 1 || minRating > 5) {
      alert('Rating value must be between 1 and 5');
      setErrorMessage('Rating value must be between 1 and 5');
      return;
    }

    try {
      // Make a request to the backend endpoint with the specified criteria
      const response = await axios.get('http://localhost:3200/app/hunt', {
        params: {
          category,
          Rating: minRating,
          minPrice,
          Total_sales: minSales,
          maxPrice,
          Thirty_day_sales: minMonthlySales,
          reviews: minReviewCount,
          Brand: brand
        }
      });

      const fetchedProducts = response.data;
      setProducts(fetchedProducts);
      setTotalProducts(fetchedProducts.length); // Set the total number of products
      setErrorMessage(''); // Clear any previous error messages
      setRequestMade(true); // Set request made to true

      if (fetchedProducts.length === 0) {
        setErrorMessage('No products found that match the criteria');
      } else {
        // Reset the form fields if products are found
        setCategory('All Categories');
        setBrand('');
        setMaxPrice('');
        setMinMonthlySales('');
        setMinPrice('');
        setMinRating('');
        setMinReviewCount('');
        setMinSales('');
      }

    } catch (error) {
      console.error('Error fetching products:', error);
      setErrorMessage(error.response?.data?.error || 'An error occurred while fetching products');
      setProducts([]); // Clear the products array
      setTotalProducts(0); // Reset the total number of products
      setRequestMade(true); // Set request made to true
    }
  };

  return (
    <div className='hunt'>
      <h1>Product Hunt</h1>
      <form onSubmit={handleSubmit}>
        <div className='huntform'>
          <div className='first'>
            <div className='cat'>
              <label className='categorylabel'>Categories</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value='All Categories'>All Categories</option>
                <option value='Electronic Devices'>Electronic Devices</option>
                {/* Add more categories as needed */}
              </select>
            </div>
            <div className='huntinput'>
              <label>Rating</label>
              <input
                type='number'
                placeholder='Min'
                value={minRating}
                onChange={(e) => setMinRating(e.target.value)}
              />
            </div>
          </div>
          <div className='first'>
            <div className='huntinput'>
              <label>Min Price</label>
              <input
                type='number'
                placeholder='Min'
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className='huntinput'>
              <label>Min Sales</label>
              <input
                type='number'
                placeholder='Min'
                value={minSales}
                onChange={(e) => setMinSales(e.target.value)}
              />
            </div>
          </div>
          <div className='first'>
            <div className='huntinput'>
              <label>Max Price</label>
              <input
                type='number'
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div className='huntinput'>
              <label>Min Monthly Sales</label>
              <input
                type='number'
                placeholder='Min'
                value={minMonthlySales}
                onChange={(e) => setMinMonthlySales(e.target.value)}
              />
            </div>
          </div>
          <div className='first'>
            <div className='huntinput'>
              <label>Min Review Count</label>
              <input
                type='number'
                placeholder='Min'
                value={minReviewCount}
                onChange={(e) => setMinReviewCount(e.target.value)}
              />
            </div>
            <div className='huntinput'>
              <label>Brand</label>
              <input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='huntbutton'>
          <button type='submit' className='hunt-button'>
            Get Products
          </button>
        </div>
      </form>

      {requestMade && ( // Conditionally render only after a request has been made
        <>
          {errorMessage ? (
            <div className='error-message'>{errorMessage}</div>
          ) : (
            totalProducts > 0 ? (
              <div className='total-products'>
                Total Products Found: {totalProducts}
              </div>
            ) : (
              <div>No products found that match the criteria.</div>
            )
          )}
        </>
      )}

      <div className='product-details'>
        {products.map((product) => (
          <div key={product.product_id} className='product-card'>
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
        ))}
      </div>
    </div>
  );
};

export default Hunt;
