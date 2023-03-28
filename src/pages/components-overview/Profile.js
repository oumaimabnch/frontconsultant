import React, { useEffect } from 'react';
import axios from "axios";
import { Grid, Paper, Avatar, Typography, IconButton } from '@mui/material';
import { Edit, Save } from '@mui/icons-material';
import { Link,useParams,useNavigate } from 'react-router-dom';

const Profile = () => {
  //zetha jdida 
  let navigate =useNavigate();
  const {id} =useParams();
  const [isEditing, setIsEditing] = React.useState(false);
  const [user, setUser] = React.useState({
    lastName: '',
    firstName: '',
    email: '',
    phoneNumber: '',
    poste: '',
    address: '',
    ville: '',
    secNum: '',
    dateOfBirth: ''
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Update user data in the backend here
  };
 /* const onInputChange=(e)=>{
    setUser({...user,[e.target.lastName]:e.target.value});
    
  }*/

  useEffect(()=>{
    loadUser();
  },[]);
  
  //zetha jdida
  const onSubmit = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8087/api/consultants//${id}`,user);
    Navigate("/")
  }
  const loadUser=async()=>{
    const result=await axios.get('http://localhost:8087/api/consultants//${id}')
    setUser(result.data)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
      <Paper sx={{ p: 2 }}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Avatar sx={{ width: 100, height: 100 }}>JD</Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h6" mt={2}>
             
             
              {isEditing ? (
                <input type="text" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
              ) : (
                <Typography variant="body1">{user.firstName}</Typography>
              )}   
                {isEditing ? (
                <input type="text" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
              ) : (
                <Typography variant="body1">{user.lastName}</Typography>
              )}      
              

              </Typography>
              <Typography variant="body1" mt={1}>
                {user.poste}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1">Contact Information</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" mt={1}>
                Email:
              </Typography>
              {isEditing ? (
                <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
              ) : (
                <Typography variant="body1">{user.email}</Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" mt={1}>
                Numéro de téléphone :
              </Typography>
              {isEditing ? (
                <input type="text" value={user.phoneNumber} onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} />
              ) : (
                <Typography variant="body1">{user.phoneNumber}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" mt={1}>
                Poste:
              </Typography>
            {isEditing ? (
                <input type="text" value={user.poste} onChange={(e) => setUser({ ...user, poste: e.target.value })} />
              ) : (
                <Typography variant="body1">{user.poste}</Typography>
              )} </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" mt={1}>
                Addresse:
              </Typography>
              {isEditing ? (
                <input type="text" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />
              ) : (
                <Typography variant="body1">{user.address}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" mt={1}>
                City:
              </Typography>
              {isEditing ? (
                <input type="text" value={user.ville} onChange={(e) => setUser({ ...user, ville: e.target.value })} />
              ) : (
                <Typography variant="body1">{user.ville}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" mt={1}>
                Social Security Number:
              </Typography>
              {isEditing ? (
                <input type="text" value={user.secNum} onChange={(e) => setUser({ ...user, secNum: e.target.value })} />
              
) : (
<Typography variant="body1">{user.secNum}</Typography>
)}
</Grid>
<Grid item xs={12}>
<Typography variant="body1" mt={1}>
Date of Birth:
</Typography>
{isEditing ? (
<input type="date" value={user.dateOfBirth} onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })} />
) : (
<Typography variant="body1">{user.dateOfBirth}</Typography>
)}
</Grid>
</Grid>
<IconButton onClick={isEditing ? handleSave : handleEdit}>
{isEditing ? <Save /> : <Edit />}
</IconButton>
</Paper>
</Grid>
</Grid>
);
};

export default Profile;
