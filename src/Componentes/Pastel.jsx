import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import Navbar from './NavBar';

const PastelDeBrigadeiro = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h4" gutterBottom>
                Pastel de Brigadeiro com Doce de Banana
              </Typography>
              <Typography variant="body1" paragraph>
                Uma deliciosa combinação de brigadeiro com doce de banana, envolto em uma massa de pastel crocante. Perfeito para servir como sobremesa ou lanche!
              </Typography>
              <Typography variant="h6" gutterBottom>
                Ingredientes (20 porções):
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Recheio:</strong>
                <br />
                - 1 lata de leite condensado (Moça)
                <br />
                - 1 colher de margarina (Qualy)
                <br />
                - 2 colheres de sopa de chocolate em pó (Nescau)
                <br />
                - 1 colher de chá de canela em pó
                <br />
                - Doce de banana (quantidade a gosto)
                <br />
                <strong>Massa:</strong>
                <br />
                - 500 g de massa de pastel
                <br />
                - Óleo para fritar
              </Typography>
              <Typography variant="h6" gutterBottom>
                Modo de Preparo:
              </Typography>
              <Typography variant="body1">
                <strong>Brigadeiro:</strong>
                <br />
                1. No micro-ondas, em um refratário alto, coloque o leite condensado, a margarina e o chocolate em pó.
                <br />
                2. Aqueça por 2 minutos e mexa bem. Continue aquecendo e mexendo a cada 2 minutos até atingir o ponto de brigadeiro (quando o brigadeiro desgruda do fundo do refratário).
                <br />
                3. Adicione a canela ao brigadeiro e misture bem.
                <br />
                <strong>Montagem:</strong>
                <br />
                4. Recheie a massa de pastel com o brigadeiro e um pouco de doce de banana (se desejar). 
                <br />
                5. Feche bem as bordas da massa de pastel para selar o recheio.
                <br />
                6. Aqueça o óleo em uma frigideira e frite os pastéis até que fiquem dourados e crocantes.
                <br />
                7. Retire os pastéis do óleo e coloque-os sobre papel toalha para escorrer o excesso de óleo.
                <br />
                8. Sirva quente e aproveite!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PastelDeBrigadeiro;
