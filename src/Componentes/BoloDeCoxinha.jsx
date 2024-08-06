import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import Navbar from './NavBar';

const BoloDeCoxinha = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h4" gutterBottom>
                Bolo de Coxinha
              </Typography>
              <Typography variant="body1" paragraph>
                Um delicioso bolo de coxinha no estilo naked cake, perfeito para festas e ocasiões especiais!
              </Typography>
              <Typography variant="h6" gutterBottom>
                Ingredientes:
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Recheio:</strong>
                <br />
                - 1 kg de peito de frango
                <br />
                - 1 colher de sobremesa de sal
                <br />
                - 1 tablete de caldo de galinha
                <br />
                - Água até cobrir o frango
                <br />
                - Cebola, alho, colorau e óleo a gosto (para refogar)
                <br />
                - Salsinha e cebolinha
                <br />
                <strong>Massa:</strong>
                <br />
                - 1 kg de batatas
                <br />
                - 1 tablete de caldo de galinha
                <br />
                - 1 colher de sobremesa de sal
                <br />
                - 1/2 copo de leite
                <br />
                - 2 copos de água que sobrou do cozimento do frango
                <br />
                - 700 gramas de farinha de trigo para dar o ponto
                <br />
                - 1 colher de sopa de margarina
                <br />
                <strong>Para Empanar:</strong>
                <br />
                - Água (quantidade que cubra a coxinha)
                <br />
                - 2 colheres de sopa de farinha de trigo
                <br />
                - Farinha de rosca
                <br />
                - Óleo vegetal para fritar
              </Typography>
              <Typography variant="h6" gutterBottom>
                Instruções:
              </Typography>
              <Typography variant="body1">
                <strong>Recheio de Frango:</strong>
                <br />
                1. Coloque o peito de frango com um tablete de caldo de galinha e água em uma panela de pressão.
                <br />
                2. Depois, desfie o frango e refogue com todos os temperos até ficar sequinho.
                <br />
                3. Reserve o caldo do cozimento do frango para utilizar na massa.
                <br />
                <strong>Massa:</strong>
                <br />
                1. Cozinhe as batatas com as cascas até que fiquem macias.
                <br />
                2. Depois, descasque e amasse bem.
                <br />
                3. Coloque-as em uma panela com sal, um tablete de caldo de galinha, o caldo que cozinhou o frango e leite.
                <br />
                4. Cozinhe tudo até ferver.
                <br />
                5. Assim que ferver, coloque a farinha e mexa até cozinhar.
                <br />
                6. Desligue o fogo, acrescente a margarina e mexa até ficar uniforme.
                <br />
                7. Coloque a massa em um recipiente e espere esfriar (até chegar a um ponto de poder colocar a mão na massa) e amasse até ficar lisa.
                <br />
                <strong>Montagem:</strong>
                <br />
                1. Faça três camadas generosas com a massa de coxinha no estilo naked cake e entre elas acrescente o recheio de frango e também queijo catupiry.
                <br />
                2. Para decorar, use no topo miniaturas de coxinhas.
                <br />
                3. Seu bolo está pronto para servir!
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                <strong>Notas:</strong>
                <br />
                Se você gosta de massa mais fina, pode ajustar a grossura conforme preferir. Assim como o recheio, você pode colocar a quantidade que agrade ao seu paladar.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BoloDeCoxinha;
