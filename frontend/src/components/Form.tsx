import React, { useState } from "react";
import { Paper, Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import { gql, useMutation } from "@apollo/client";

// Définir la mutation GraphQL
const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      name
      emoji
    }
  }
`;

export default function Form() {
  // États pour les champs
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Mutation GraphQL
  const [addCountry, { loading, error }] = useMutation(ADD_COUNTRY);

  // Fonction pour soumettre le formulaire
  const handleSubmit = async () => {
    try {
      await addCountry({
        variables: {
          data: {
            name,
            emoji,
            code,
          },
        },
      });

      setName("");
      setEmoji("");
      setCode("");
      setOpenSnackbar(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Erreur lors de l'ajout du pays.");
    }
  };

  return (
    <Paper
      sx={{
        backgroundColor: "#f0f0f0",
        padding: "16px",
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Champ "Name" */}
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          sx={{ marginRight: "8px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Champ "Emoji" */}
        <TextField
          label="Emoji"
          variant="outlined"
          size="small"
          sx={{ marginRight: "8px" }}
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
        />
        {/* Champ "Code" */}
        <TextField
          label="Code"
          variant="outlined"
          size="small"
          sx={{ marginRight: "8px" }}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        {/* Bouton "Add" */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f01759",
            "&:hover": { backgroundColor: "#e73370" },
          }}
          onClick={handleSubmit}
          disabled={loading} // Désactiver pendant le chargement
        >
          {loading ? "Ajout..." : "Add"}
        </Button>
      </Box>

      {/* Notification Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Pays ajouté avec succès !
        </Alert>
      </Snackbar>

      {/* Affichage des erreurs */}
      {errorMessage && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {errorMessage}
        </Alert>
      )}
    </Paper>
  );
}
