import React, { useState } from 'react';
import axios from 'axios';

function SetPasswordForm() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }
/*
    try {
      const response = await axios.post('/api/set-password', {
        username,
        newPassword,
      });
      if (response.data.success) {
        setSuccess(true);
        setUsername('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.message);
    }*/
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      {success && <div>Password set successfully</div>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newPassword">New password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      <button type="submit">Set password</button>
    </form>
  );
}
