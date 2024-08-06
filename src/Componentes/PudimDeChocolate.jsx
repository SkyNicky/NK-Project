import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import Navbar from './NavBar';

const PudimDeChocolate = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h4" gutterBottom>
                Pudim de Chocolate
              </Typography>
              <Typography variant="body1" paragraph>
                Um delicioso pudim de chocolate, perfeito para qualquer ocasião!
              </Typography>
              <Typography variant="h6" gutterBottom>
                Ingredientes:
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Para o pudim:</strong>
                <br />
                - 1 copo de leite
                <br />
                - 4 ovos
                <br />
                - 1 lata de leite condensado
                <br />
                - 8 colheres de sopa de chocolate em pó
                <br />
                - Chocolate granulado para cobertura
                <br />
                <strong>Para a calda:</strong>
                <br />
                - 3 colheres de sopa de açúcar
                <br />
                - 2 colheres de sopa de chocolate em pó
              </Typography>
              <Typography variant="h6" gutterBottom>
                Modo de Preparo:
              </Typography>
              <Typography variant="body1">
                1. Bata todos os ingredientes do pudim no liquidificador até ficar homogêneo.
                <br />
                2. Faça uma calda com o açúcar e o chocolate e caramelize uma forma de pudim.
                <br />
                3. Despeje o conteúdo do liquidificador na forma e cozinhe em banho-maria por 40 minutos.
                <br />
                4. Depois de frio, retire da forma e polvilhe chocolate granulado por cima.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PudimDeChocolate;
