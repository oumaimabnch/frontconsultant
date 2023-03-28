import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Container} from '@mui/material';
import { useFormik } from 'formik';
import { Card, CardContent } from '@mui/material';


import * as yup from 'yup';
import ComponentSkeleton from './ComponentSkeleton';
import MainCard from 'components/MainCard';


const validationSchema = yup.object({
    nom: yup.string().required('Nom is required'),
    prenom: yup.string().required('Prénom is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    poste: yup.string().required('Poste is required'),

    dateNaissance: yup.string().required('Date de naissance is required'),
    numSS: yup.string().required('Numéro SS is required'),
    telephone: yup.string().required('Numéro de téléphone is required'),
    adresse: yup.string().required('Adresse is required'),
    codePostal: yup.string().required('Code postal is required'),
    ville: yup.string(),
   
  });

  

export default function Consultant() {


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


  return (
    <ComponentSkeleton>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MainCard  sx={{  width: 600, marginTop: -7, marginBottom: 2 }} >

       
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        '& > :not(style)': { m: 1,  },
        display: 'flex',
    flexDirection: 'column',
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: 'flex', flexDirection: 'row' ,gap: '16px'  }}>


      <TextField  id="nom" label="Nom" variant="outlined" required onChange={formik.handleChange} value={formik.values.nom} error={formik.touched.nom && Boolean(formik.errors.nom)}
            helperText={formik.touched.nom && formik.errors.nom}/>                

      <TextField id="prenom" label="Prénom" variant="outlined" required  value={formik.values.prenom}
            onChange={formik.handleChange}
            error={formik.touched.prenom && Boolean(formik.errors.prenom)}
            helperText={formik.touched.prenom && formik.errors.prenom} />
            </Box>
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
  );
}