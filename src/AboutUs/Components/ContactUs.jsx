import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <div className="my-10"></div>
      <div className="flex flex-col justify-content">
        <h2 className='font-extrabold text-left ml-10 text-2xl'>Get in touch with us</h2>
        <div className="my-8"></div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" className="font-semibold text-6xl text-left indent-8 mb-4">
                We'd love to hear from you! Whether you're a restaurant owner interested in joining our platform or a customer with feedback or questions, please don't hesitate to reach out.
              </Typography>
              <div className="my-10"></div>
              <div className="grid place-items-end ">
                <Typography variant="body1" className="place-self-end text-end text-black mb-4">
                    Thank you for joining us on this delicious journey across Morocco!
                </Typography>
              </div>
              
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="bg-gray-100 border-2 shadow-lg rounded-lg p-5">
              <Typography variant="h6" className="font-semibold text-black mb-4">
                How can we help?
              </Typography>
              <form onSubmit={handleSubmit} className="space-y-4">
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Message"
                  variant="outlined"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <Button type="submit" variant="contained" color="primary" size="large" onClick={handleSubmit}>
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ContactUs;
