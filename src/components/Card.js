import React from 'react';
import { Card as MUICard, CardContent, Typography } from '@mui/material';
import { Chart } from 'react-chartjs-2';

const Card = ({ title }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: title,
        data: [12, 19, 3, 5],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <MUICard>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Chart type="bar" data={data} />
      </CardContent>
    </MUICard>
  );
};

export default Card;
