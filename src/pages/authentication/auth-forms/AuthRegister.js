import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {link,useNavigate}from "react-router-dom"


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Container} from '@mui/material';
import { useFormik } from 'formik';

import { Card, CardContent } from '@mui/material';


import * as yup from 'yup';


const validationSchema = yup.object({
  firstName: yup.string().required('Prénom is required'),
  lastName: yup.string().required('Nom is required'),
  username: yup.string().email('Enter a valid email').required('Email is required'),
    poste: yup.string().required('Poste is required'),

    dateOfBirth: yup.string().required('Date de naissance is required'),
    secNum: yup.string().required('Numéro SS is required'),
    phoneNumber: yup.string().required('Numéro de téléphone is required'),
    address: yup.string().required('Adresse is required'),
    
  });

  

export default function Consultant() {
  let navigate =useNavigate();
  const [consultant,setConsultant]= useState({

    firstName:"",
    lastName: "",
    username:"",
    poste: "",

    dateOfBirth:"",
    secNum:"",
    phoneNumber:"",
    address:"" ,
    

  })
 /* const {firstname,prenom,email,poste,dateNaissance,numSS,telephone,adresse}=consultant
  const onInputChange=(e)=>{
    setUser({...consultant,[e.target.nom]:e.target.value});
  }

  
  /*const onSubmit = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8087/api/consultants",consultant);
    navigate("/");};*/


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      poste:'',
      phoneNumber: '',
      secNum: '',
      dateOfBirth: '',
      address: '',
      
    },
    validationSchema: validationSchema,
  
    
    onSubmit: async(values) => {
      console.log(values);
     await axios.post('http://localhost:8087/api/consultants', values)
        
    },
    
  });
  const { handleChange, handleBlur, errors, isValid , dirty } = formik;


  return (
    
       
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
      
           <TextField id="username" label="Email" variant="outlined" required email="Enter a valid mail"
          onChange={handleChange} onBlur={handleBlur}  error={!!errors.email} helperText={errors.email}/>

          <Box sx={{ display: 'flex', flexDirection: 'row' ,gap: '16px'  }}>
          <TextField  id="firstName" label="Nom" variant="outlined" required onChange={formik.handleChange} value={formik.values.firstName} error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}/>                

           <TextField id="lastName" label="Prénom" variant="outlined" required  value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName} />
            </Box>
     
            <TextField id="address" label="Adresse" variant="outlined" required  value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address} />
            
            <TextField id="poste" label="Poste" variant="outlined" required value={formik.values.poste}
            onChange={formik.handleChange}
            error={formik.touched.poste && Boolean(formik.errors.poste)}
            helperText={formik.touched.poste && formik.errors.poste} />
           
           
            <TextField id="phoneNumber" label="Numéro de téléphone" variant="outlined" required  value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber} />
      


            <TextField id="secNum" label="Numéro SS" variant="outlined" required value={formik.values.secNum}
            onChange={formik.handleChange}
            error={formik.touched.secNum && Boolean(formik.errors.secNum)}
            helperText={formik.touched.secNum && formik.errors.secNum} />


        <TextField   sx={{ mt: 1}}  id="dateOfBirth" type="date"   variant="outlined" required value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth} />


    
     
     
      
            <Box sx={{ mt: 2 }}>
     
            <Button  fullWidth type="submit"  variant="contained" sx={{ marginTop: '16px'}}> Enregistrer </Button>
             </Box>
          
            
    </Box>
    
  );
}
