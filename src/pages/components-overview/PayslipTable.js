import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";



function FicheDePaieTable() {

  const annees = [

    {
      annee: 2021, mois: [
        { mois: "Janvier", salaireBrut: 2021, netAvantIR: 2700, ir: 600, NetApresIR: 100, chargeSociale: 600, chargePatronale: 900, fraisPro: 150, taxeAssurance: 100, fraisGestion: 50, provisionCP: 300, autreFacture: 200, reserve: 500 },
        { mois: "Février", salaireBrut: 3000, netAvantIR: 2700, ir: 100, NetApresIR: 100, chargeSociale: 600, chargePatronale: 900, fraisPro: 150, taxeAssurance: 100, fraisGestion: 50, provisionCP: 300, autreFacture: 200, reserve: 500 },
        { mois: "Mars", salaireBrut: 3000, netAvantIR: 2700, ir: 100, NetApresIR: 100, chargeSociale: 600, chargePatronale: 900, fraisPro: 150, taxeAssurance: 100, fraisGestion: 50, provisionCP: 300, autreFacture: 200, reserve: 500 },
      ]
    },
    {
      annee: 2022, mois: [
        { mois: "Janvier", salaireBrut: 2022, netAvantIR: 2700, ir: 600, NetApresIR: 100, chargeSociale: 600, chargePatronale: 900, fraisPro: 150, taxeAssurance: 100, fraisGestion: 50, provisionCP: 300, autreFacture: 200, reserve: 500 },
        { mois: "Février", salaireBrut: 3000, netAvantIR: 2700, ir: 100, NetApresIR: 100, chargeSociale: 600, chargePatronale: 900, fraisPro: 150, taxeAssurance: 100, fraisGestion: 50, provisionCP: 300, autreFacture: 200, reserve: 500 },
        { mois: "Mars", salaireBrut: 3000, netAvantIR: 2700, ir: 100, NetApresIR: 100, chargeSociale: 600, chargePatronale: 900, fraisPro: 150, taxeAssurance: 100, fraisGestion: 50, provisionCP: 300, autreFacture: 200, reserve: 500 },
      ]
    },

    {
      annee: 2023, mois: [
        { mois: "Janvier", salaireBrut: 3000, netAvantIR: 2700, ir: 600, NetApresIR: 100, chargeSociale: 600, chargePatronale: 900, fraisPro: 150, taxeAssurance: 100, fraisGestion: 50, provisionCP: 300, autreFacture: 200, reserve: 500 },
        { mois: "Février", salaireBrut: 3000, netAvantIR: 2700, ir: 100, NetApresIR: 100, chargeSociale: 600, chargePatronale: 900, fraisPro: 150, taxeAssurance: 100, fraisGestion: 50, provisionCP: 300, autreFacture: 200, reserve: 500 },
        { mois: "Mars", salaireBrut: 3000, netAvantIR: 2700, ir: 100, NetApresIR: 100, chargeSociale: 600, chargePatronale: 900, fraisPro: 150, taxeAssurance: 100, fraisGestion: 50, provisionCP: 300, autreFacture: 200, reserve: 500 },
      ]
    },
  ];
  const [anneeSelectionnee, setAnneeSelectionnee] = useState(annees[2]); // l'année 2023 sera sélectionnée par défaut

  // fonction pour afficher les données pour un mois spécifique
  const afficherDonneesMois = (mois) => {
    alert(`Salaire brut : ${mois.salaireBrut}\nNet avant IR : ${mois.netAvantIR}\nIR net après IR : ${mois.irNetApresIR}\nCharge sociale : ${mois.chargeSociale}\nCharge patronale : ${mois.chargePatronale}\nFrais professionnels : ${mois.fraisPro}\nTaxe et assurance : ${mois.taxeAssurance}\nFrais de gestion : ${mois.fraisGestion}\nProvision CP : ${mois.provisionCP}\nAutre facture : ${mois.autreFacture}\nRéserve : ${mois.reserve}`);
  };

  return (
    <TableContainer component={Paper} Style={{ maxWidth: 800, margin: "auto", marginTop: 50 }}>
      <Table aria-label="fiche de paie table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }} > Année</TableCell>

            <TableCell style={{ fontWeight: "bold" }} >Salaire brut </TableCell>
            <TableCell style={{ fontWeight: "bold" }}> Net avant IR </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>IR </TableCell>
            <TableCell style={{ fontWeight: "bold" }}> net après IR </TableCell>


            <TableCell style={{ fontWeight: "bold" }}>Charge sociale </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Charge patronale </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Frais professionnels </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Taxe et assurance </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Frais de gestion </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Provision CP </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Autre facture </TableCell>
            <TableCell style={{ fontWeight: "bold" }} >Réserve </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {annees.map((annee) => (

            <React.Fragment key={annee.annee}>
              <TableRow hover onClick={() => setAnneeSelectionnee(annee)} sx={{ '&:hover': { cursor: 'pointer' } }}
              >
                <TableCell>{annee.annee}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.salaireBrut, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.netAvantIR, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.ir, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.irNetApresIR, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.chargeSociale, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.chargePatronale, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.fraisPro, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.taxeAssurance, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.fraisGestion, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.provisionCP, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.autreFacture, 0)}</TableCell>
                <TableCell>{annee.mois.reduce((acc, cur) => acc + cur.reserve, 0)}</TableCell>
              </TableRow>
              {annee === anneeSelectionnee && annee.mois.map((mois) => (
                <TableRow hover key={`${annee.annee}-${mois.mois}`} onClick={() => afficherDonneesMois(mois)}>
                  <TableCell>{mois.mois}</TableCell>
                  <TableCell>{mois.salaireBrut}</TableCell>
                  <TableCell>{mois.netAvantIR}</TableCell>
                  <TableCell>{mois.ir}</TableCell>
                  <TableCell>{mois.NetApresIR}</TableCell>
                  <TableCell>{mois.chargeSociale}</TableCell>
                  <TableCell>{mois.chargePatronale}</TableCell>
                  <TableCell>{mois.fraisPro}</TableCell>
                  <TableCell>{mois.taxeAssurance}</TableCell>
                  <TableCell>{mois.fraisGestion}</TableCell>
                  <TableCell>{mois.provisionCP}</TableCell>2021
                  <TableCell>{mois.autreFacture}</TableCell>
                  <TableCell>{mois.reserve}</TableCell>
                </TableRow>
              ))}
            </React.Fragment>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default FicheDePaieTable;