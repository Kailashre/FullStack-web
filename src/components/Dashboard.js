import React from 'react';
import { Grid } from '@mui/material';
import Card from './Card';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card title="Data 1" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card title="Data 2" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card title="Data 3" />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
