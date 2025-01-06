import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Card, CardContent, Grid2, Typography } from '@mui/material';

type Country = {
    id: number;
    name: string;
    emoji: string;
  };
  

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      id
      name
      emoji
    }
  }
`;

export default function Cardsflags() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <Grid2 
      container 
      spacing={2} 
      justifyContent="center"
      alignItems="center"
    >
        {data.countries.map((country: Country) => (
        <Grid2  size={{xs:12, sm:6, md:3}} key={country.id}>
          <Card variant="outlined">
            <CardContent style={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: '10px' }}>
              <Typography variant="h6">{country.name}</Typography>
              <Typography variant="h5">{country.emoji}</Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}
