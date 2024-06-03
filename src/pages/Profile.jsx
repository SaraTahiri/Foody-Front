import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { updateClientProfile } from '../Api/userApi'; 

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    // Ajoutez d'autres champs de profil nécessaires
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const updatedUser = await updateClientProfile(formData);
      setUser(updatedUser);
      setMessage('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile', error);
      setMessage('Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Ajoutez d'autres champs de profil nécessaires */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Profile;
