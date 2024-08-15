import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    x: {
      beginAtZero: true,
    },
  },
};

const MyChart = () => {
  return <Bar data={data} options={options} />;
};

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [updated, setUpdated] = useState(false);


  const api = axios.create({
    baseURL: 'http://localhost:5000/api', 
  });
  
  const fetchUser = async () => {
    try {
      const { data } = await api.get('/auth/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    };
    
  };

  useEffect(() => {
    fetchUser();
  }, []); 
  

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put('/api/auth/profile', user, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setUpdated(true);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>
      {updated && <Typography variant="h6" color="success">Profile updated!</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default Profile;
