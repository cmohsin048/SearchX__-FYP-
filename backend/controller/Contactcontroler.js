const FormData = require('../modal/Contact');

const SubmitForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const formData = new FormData({
      name: name,
      email: email,
      message: message,
    });

    await formData.save();

    res.status(201).json({ message: 'Message submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { SubmitForm };
