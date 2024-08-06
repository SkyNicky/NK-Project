import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import Navbar from './NavBar';

const CuscuzDeTapioca = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h4" gutterBottom>
                Cuscuz de Tapioca
              </Typography>
              <Typography variant="body1" paragraph>
                Uma deliciosa e prática receita de cuscuz de tapioca com apenas 4 ingredientes básicos. Ideal para quem busca uma sobremesa fácil e saborosa!
              </Typography>
              <Typography variant="h6" gutterBottom>
                Ingredientes:
              </Typography>
              <Typography variant="body1" paragraph>
                - 1 vidro de leite de coco (200ml)
                <br />
                - 1,5 litros de leite (em temperatura ambiente)
                <br />
                - 500g de tapioca granulada
                <br />
                - 2 xícaras (chá) de açúcar
                <br />
                - 1 latinha de leite condensado (opcional)
                <br />
                - Coco ralado fresco (opcional)
              </Typography>
              <Typography variant="h6" gutterBottom>
                Modo de Preparo:
              </Typography>
              <Typography variant="body1">
                1. Em um refratário, coloque a tapioca granulada e o açúcar. Misture bem.
                <br />
                2. Adicione o leite de coco e o leite à mistura. Misture novamente.
                <br />
                3. Deixe a mistura descansar, sem mexer, por aproximadamente 5 minutos.
                <br />
                4. Após esse tempo, mexa a mistura e repita o processo de deixar descansar até a mistura ficar mais grossa.
                <br />
                5. Cubra o refratário com filme plástico e leve à geladeira por cerca de 5 horas.
                <br />
                6. Após o tempo de geladeira, a receita estará pronta para ser servida.
                <br />
                7. Se desejar, adicione leite condensado por cima e finalize com um pouco de coco ralado.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CuscuzDeTapioca;
