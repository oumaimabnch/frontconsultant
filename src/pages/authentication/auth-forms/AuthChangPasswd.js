import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
 
const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Le nouveau mot de passe et la confirmation ne correspondent pas.");
      return;
    }
    // Envoyer la requête de changement de mot de passe ici
    console.log(currentPassword, newPassword, confirmPassword);
    try {
      //const token = localStorage.getItem("authToken");
      const response = await axios.post("/api/change-password",
       { currentPassword, newPassword },
       {
        headers: { Authorization: `Bearer ${token}` },
      }

      );
      if (response.data.success) {
        setPasswordChanged(true);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.message);
    }  };


  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      {passwordChanged ? (
        <Typography>Votre mot de passe a été changé avec succès.</Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="password"
                name="currentPassword"
                label="Mot de passe actuel"
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                name="newPassword"
                label="Nouveau mot de passe"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                name="confirmPassword"
                label="Confirmer le nouveau mot de passe"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" fullWidth>
                Changer le mot de passe
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default ChangePassword;
