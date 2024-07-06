import React, { useState } from 'react';
import axios from 'axios';


const Contactus = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const isFormValid = () => {
    return Name.trim() !== '' && Email.trim() !== '' && Message.trim() !== '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      let contact = {
        name: Name,
        email: Email,
        message: Message,
      };
  
      const response = await axios.post('http://localhost:3200/app/contact', contact);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
      const errorMessage = error.response?.data?.error || 'Unable to add feedback';
      alert(errorMessage);
    }
    setName('');
    setEmail('');
    setMessage('');
  };
  
  return (
    <div className='contactus'>
      <div className='contacts'>
        <h5>Contact us</h5>
        <h1>Love to hear from you. Get in <span>touch</span></h1>
      </div>
      <div className='contactfields'>
        <form onSubmit={handleSubmit}>
          <div className='contact-name'>
            <label htmlFor="form-item-1"> Name</label>
            <div className='name'>
              <input
                type='text'
                value={Name}
                onChange={(e) => setName(e.target.value)}
                name='name'
                id="form-item-1"
              />
            </div>
          </div>
          <div className='contact-name'>
            <label htmlFor="form-item-2"> Email</label>
            <div className='name'>
              <input
                type='text'
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                name='email'
                id="form-item-2"
              />
            </div>
          </div>
          <div className='contact-name'>
            <label htmlFor="form-item-3"> Message</label>
            <div className='name'>
              <textarea
                type='text'
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                name='message'
                id="form-item-3"
              ></textarea>
            </div>
          </div>
          <button className={`submit-button ${!isFormValid() ? 'disabled' : ''}`} type='submit' disabled={!isFormValid()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
