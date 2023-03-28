import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Dialog,DialogTitle,DialogContent,DialogActions }from '@mui/material' ;
import { useFormik } from 'formik';
import * as yup from 'yup';

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



const validationSchema = yup.object({
    nom: yup.string().required('Nom is required'),
    prenom: yup.string().required('Prénom is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    poste: yup.string().required('Poste is required'),

    dateNaissance: yup.string().required('Date de naissance is required'),
    numSS: yup.string().matches(/^[0-9]*$/, "Must be a number").required('Numéro SS is required'),
    telephone: yup.string().required('Numéro de téléphone is required'),
    adresse: yup.string().required('Adresse is required'),
    codePostal: yup.string().required('Code postal is required'),
    ville: yup.string(),
   
  });


function ConsultantProfile() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const formik = useFormik({
    initialValues: {
      nom: '',
      prenom: '',
      email: '',
      poste:'',
      dateNaissance: '',
      numSS: '',
      telephone: '',
      adresse: '',
      codePostal: '',
      ville: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { handleChange, handleBlur, errors, isValid , dirty } = formik;



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

  const [open, setOpen]=useState(false)

  const handleCancel = () => {
    setEditing(false);
    // Reset data to original consultant data
    setName(consultant.nom);
    setTitle(consultant.poste);
    setEmail(consultant.email);
    setPhone(consultant.telephone);
    setLocation(consultant.adresse);
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
              <TextField
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
          <div style={{ display: 'flex', justifyContent: 'center'  }}>

          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => setOpen(true)}
            sx={{ mt: 2 }}
          >
            Edit Profile
          </Button>
          </div>
          </Box>
           )}
      
          <Dialog open={open}
                onClose={()=>setOpen(false)}>
                   <DialogTitle>     edit your profil     </DialogTitle>
             
             
     <DialogContent style={{ width: '800px', height: '500px' }}>   
     <ComponentSkeleton>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MainCard  sx={{ width: 700, mt: 10, mb: 2  }} >

                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', p: 2  }}>


                    <TextField  id="nom" label="Nom" variant="outlined" required onChange={formik.handleChange} value={formik.values.nom} error={formik.touched.nom && Boolean(formik.errors.nom)}
            helperText={formik.touched.nom && formik.errors.nom}/>                

      <TextField id="prenom" label="Prénom" variant="outlined" required  value={formik.values.prenom}
            onChange={formik.handleChange}
            error={formik.touched.prenom && Boolean(formik.errors.prenom)}
            helperText={formik.touched.prenom && formik.errors.prenom} />
           
      <TextField id="email" label="Email" variant="outlined" required email="Enter a valid mail"
       onChange={handleChange} onBlur={handleBlur}  error={!!errors.email} helperText={errors.email}/>
       
      <TextField id="poste" label="Poste" variant="outlined" required value={formik.values.poste}
            onChange={formik.handleChange}
            error={formik.touched.poste && Boolean(formik.errors.poste)}
            helperText={formik.touched.poste && formik.errors.poste} />

<TextField id="telephone" label="Numéro de téléphone" variant="outlined" required  value={formik.values.telephone}
            onChange={formik.handleChange}
            error={formik.touched.telephone && Boolean(formik.errors.telephone)}
            helperText={formik.touched.telephone && formik.errors.telephone} />


<TextField id="numSS" label="Numéro SS" variant="outlined" required value={formik.values.numSS}
            onChange={formik.handleChange}
            error={formik.touched.numSS && Boolean(formik.errors.numSS)}
            helperText={formik.touched.numSS && formik.errors.numSS} />


        <TextField   sx={{ mt: 1}}  id="dateNaissance" type="date"   variant="outlined" required value={formik.values.dateNaissance}
            onChange={formik.handleChange}
            error={formik.touched.dateNaissance && Boolean(formik.errors.dateNaissance)}
            helperText={formik.touched.dateNaissance && formik.errors.dateNaissance} />


    
     
      <TextField id="adresse" label="Adresse" variant="outlined" required  value={formik.values.adresse}
            onChange={formik.handleChange}
            error={formik.touched.adresse && Boolean(formik.errors.adresse)}
            helperText={formik.touched.adresse && formik.errors.adresse} />
      <TextField id="codePostal" label="Code postal" variant="outlined"  required  value={formik.values.codePostal}
            onChange={formik.handleChange}
            error={formik.touched.codePostal && Boolean(formik.errors.codePostal)}
            helperText={formik.touched.codePostal && formik.errors.codePostal}  />
      <TextField id="ville" label="Ville" variant="outlined"  required value={formik.values.ville}
            onChange={formik.handleChange}
            error={formik.touched.ville && Boolean(formik.errors.ville)}
            helperText={formik.touched.ville && formik.errors.ville} />
            <Box sx={{ mt: 2 }}>
     
            <Button  fullWidth type="submit"  variant="contained" sx={{ marginTop: '16px'}}> Enregistrer </Button>
             </Box>
             </Box>

             </MainCard>
    </Container>

  
    </ComponentSkeleton>

                





                
             

                
        
     </DialogContent>
         </Dialog>
      
      

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