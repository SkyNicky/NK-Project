import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import Navbar from './NavBar';

const PanquecaDoce = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h4" gutterBottom>
                Panqueca Doce
              </Typography>
              <Typography variant="body1" paragraph>
                Uma deliciosa panqueca doce, perfeita para um café da manhã ou lanche rápido. Pode ser servida com brigadeiro, açúcar cristal ou chocolate em pó.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Ingredientes (4 porções):
              </Typography>
              <Typography variant="body1" paragraph>
                - 1 xícara de leite
                <br />
                - 1 xícara de farinha de trigo
                <br />
                - 1 ovo
                <br />
                - 1 colher de sopa de açúcar
                <br />
                - 1 pitada de sal
                <br />
                - Manteiga (para untar a frigideira)
                <br />
                - Açúcar cristal ou chocolate em pó com leite condensado e manteiga (para cobertura, a gosto)
              </Typography>
              <Typography variant="h6" gutterBottom>
                Modo de Preparo:
              </Typography>
              <Typography variant="body1">
                1. No liquidificador, coloque a farinha de trigo, o leite, o ovo, o açúcar e a pitada de sal.
                <br />
                2. Bata bem até que a consistência fique meio líquida e meio sólida.
                <br />
                3. Enquanto o liquidificador bate, unte uma frigideira com manteiga. Coloque a frigideira no fogão em temperatura baixa por 15 segundos.
                <br />
                4. Adicione a mistura do liquidificador na frigideira.
                <br />
                5. Tente modelar o formato da massa inclinando a frigideira para os lados, para que a panqueca fique com um formato uniforme.
                <br />
                6. Quando a massa começar a endurecer, use uma espátula para descolar os cantos da panqueca.
                <br />
                7. Observe a parte de baixo da panqueca; ela deve estar dourada.
                <br />
                8. Quando estiver dourada, vire a panqueca e adicione brigadeiro ou açúcar cristal (ou chocolate em pó com leite condensado, se preferir).
                <br />
                9. Tome cuidado, pois a panqueca chega ao ponto mais rapidamente quando virada.
                <br />
                10. Dobre a panqueca com a parte da cobertura para dentro e sirva quente.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PanquecaDoce;
