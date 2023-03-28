import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { Link } from 'react-router-dom';



// Exemple de données pour les consultants
/*const consultantsData = [
  { id: 1, nom: 'Doe', prenom: 'John', email: 'johndoe@example.com', poste: 'Consultant senior' },
  { id: 2, nom: 'Smith', prenom: 'Jane', email: 'janesmith@example.com', poste: 'Consultant junior' },
  { id: 3, nom: 'Williams', prenom: 'David', email: 'davidwilliams@example.com', poste: 'Consultant senior' },
];
*/
const StyledTableContainer = styled(TableContainer)`
  max-height: 440px;
`;

function ConsultantsTable() {
  const [consultants, setConsultants] = useState([]);
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8087/api/consultants");
    setConsultants(result.data)
  };

  // Supprimer un consultant de la liste
  const handleDelete = (id) => {
    const updatedConsultants = consultants.filter((consultant) => consultant.id !== id);
    setConsultants(updatedConsultants);
  };

  return (
    <>
      <Link startIcon={<AddIcon />} variant="contained" color="primary"
      to={`/AddUser`}
      
      >
        Ajouter un nouveau consultant
      </Link>
      <StyledTableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Poste</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consultants.map((consultant) => (
              <TableRow key={consultant.id}>
                <TableCell>{consultant.firstName}</TableCell>
                <TableCell>{consultant.lastName}</TableCell>
                <TableCell>{consultant.username}</TableCell>
                <TableCell>{consultant.poste}</TableCell>
                <TableCell>
                <IconButton aria-label="view">
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={() => handleDelete(consultant.id)}>
                    <DeleteIcon />
                  </IconButton>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
}

export default ConsultantsTable;
