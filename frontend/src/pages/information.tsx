import { Card, CardContent, Typography } from "@mui/material";

export default function Informations() {

  return (
    <Card variant="outlined" style={{ maxWidth: 300, margin: 'auto' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        {/* Affichage du drapeau */}
        <Typography variant="h1" style={{ fontSize: '4rem' }}>
        🇫🇷
        </Typography>

        {/* Informations sur le pays */}
        <Typography variant="body1">Name : France (FR)</Typography>
        <Typography variant="body2">Continent : Europe</Typography>
      </CardContent>
    </Card>
);
}
