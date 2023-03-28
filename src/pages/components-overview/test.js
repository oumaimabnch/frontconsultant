import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MainCard from 'components/MainCard';
import ComponentSkeleton from './ComponentSkeleton';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

function ConsultantProfile() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const consultant = {
    name,
    title,
    email,
    phone,
    location,
    bio: 'John Doe is an experienced consultant with expertise in business strategy and marketing. He has worked with clients from various industries, including finance, healthcare, and technology.',
    social: [
      {
        name: 'LinkedIn',
        icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        link: 'https://www.linkedin.com/in/johndoe',
      },
      {
        name: 'Twitter',
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
        link: 'https://twitter.com/johndoe',
      },
    ],
  };

  const handleSave = () => {
    setEditing(false);
    // Save changes to consultant data
  };

  const handleCancel = () => {
    setEditing(false);
    // Reset data to original consultant data
    setName(consultant.name);
    setTitle(consultant.title);
    setEmail(consultant.email);
    setPhone(consultant.phone);
    setLocation(consultant.location);
  };

  return (
<ComponentSkeleton>
   
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <MainCard container spacing={4} sx={{  width: 600, marginTop: -11, marginBottom: 2 }}>
        

        <MainCard item xs={12} md={4}>
     
        


          <Avatar
            sx={{
              width: 150,
              height: 150,
              margin: '0 auto',
            }}
            alt={name}
            src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
          />
          {editing ? (
            <Box spacing={2} sx={{ mt: 2 }}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          /*    <TextField
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Box direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined" onClick={handleCancel}>
                  Cancel
                </Button>
                </Box>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      ) : (
        <Box spacing={2} sx={{ mt: 2 }}>         
          <Typography variant="h5" align="center">
            {consultant.name}
          </Typography>
          <Typography variant="subtitle1" align="center">
            {consultant.title}
          </Typography>
          <Box direction="row" spacing={2} justifyContent="center">
            <IconButton
              href={`mailto:${consultant.email}`}
              aria-label="Email"
            >
              <MailOutlineIcon />
            </IconButton>
            <IconButton
              href={`tel:${consultant.phone}`}
              aria-label="Phone"
            >
              <PhoneIcon />
            </IconButton>
            <IconButton
              href={`sms:${consultant.phone}`}
              aria-label="Message"
            >
              <MessageIcon />
            </IconButton>
          </Box>
          <Box direction="row" spacing={2} alignItems="center">
            <LocationOnIcon />
            <Typography variant="body2">{consultant.location}</Typography>
          </Box>
          <Divider />
          <Typography variant="body1" sx={{ mt: 2 }}>
            {consultant.bio}
          </Typography>
          <Box direction="row" spacing={2} sx={{ mt: 2 }}>
            {consultant.social.map((social) => (
              <IconButton
                key={social.name}
                href={social.link}
                aria-label={social.name}
              >
                <img
                  src={social.icon}
                  alt={`${social.name} icon`}
                  width="24"
                  height="24"
                />
              </IconButton>
            ))}
          </Box>
          <div style={{ display: 'flex', justifyContent: 'center' }}>

          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => setEditing(true)}
            sx={{ mt: 2 }}
          >
            Edit Profile
          </Button>
          </div>
          </Box>
      )}
      

    </MainCard>
    
    <MainCard item xs={12} md={8}>
      {/* Consultant services and experience section */}
    </MainCard>
   
  </MainCard>
</Container>
</ComponentSkeleton>


  );
            }
            export default ConsultantProfile;



































