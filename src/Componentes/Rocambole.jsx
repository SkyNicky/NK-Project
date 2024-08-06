import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import Navbar from './NavBar';

const RocamboleDePeru = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h4" gutterBottom>
                Rocambole de Peru
              </Typography>
              <Typography variant="body1" paragraph>
                Um delicioso rocambole salgado de peru defumado com queijo e maionese, perfeito para servir como aperitivo ou prato principal. 
              </Typography>
              <Typography variant="h6" gutterBottom>
                Ingredientes:
              </Typography>
              <Typography variant="body1" paragraph>
                - 4 ovos
                <br />
                - 1 colher (sopa) de sal
                <br />
                - 1/2 xícara (chá) de farinha de trigo
                <br />
                - 1/2 colher (sopa) de fermento químico
                <br />
                - 150 gramas de peru defumado
                <br />
                - 1/2 xícara (chá) de queijo de minas (ou queijo branco) frescal light ralado grosso
                <br />
                - 1/2 xícara (chá) de maionese light
                <br />
                - 1/2 xícara (chá) de alecrim picado
                <br />
                - 1/2 xícara (chá) de maionese
                <br />
                - Queijo parmesão ralado a gosto para polvilhar
              </Typography>
              <Typography variant="h6" gutterBottom>
                Modo de Preparo:
              </Typography>
              <Typography variant="body1">
                1. No processador, bata o peru defumado e o queijo de minas até obter uma mistura homogênea.
                <br />
                2. Misture a maionese light e o alecrim picado. Reserve.
                <br />
                3. Bata bem os ovos com o sal na batedeira até que estejam bem misturados.
                <br />
                4. Retire da batedeira e adicione, aos poucos, a farinha misturada com o fermento, mexendo delicadamente até que a massa esteja uniforme.
                <br />
                5. Transfira a massa para uma assadeira untada e forrada com papel manteiga.
                <br />
                6. Asse no forno pré-aquecido a 170°C a 190°C por aproximadamente 10 minutos.
                <br />
                7. Desenforme sobre um pano úmido e espalhe bem o recheio preparado.
                <br />
                8. Enrole o rocambole com a ajuda do pano de prato limpo e deixe descansar por 15 minutos.
                <br />
                9. Transfira o rocambole para o prato de servir.
                <br />
                10. Cubra com a maionese e polvilhe com queijo parmesão ralado a gosto.
                <br />
                11. Corte em fatias e sirva.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RocamboleDePeru;
