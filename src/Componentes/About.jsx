import React from 'react';
import Navbar from './NavBar';
import { Box, Container, Typography } from '@mui/material';

const About = () => (
  <div>
    <Navbar />
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh' }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Sobre Nós
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 2 }}>
          Bem-vindo ao nosso site de receitas!
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Estamos entusiasmados em compartilhar nossa paixão pela culinária com você. Este site foi criado como projeto final para nossa disciplina de Desenvolvimento Web 1.
          Aqui, você encontrará uma variedade de receitas deliciosas elaboradas por nós.
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          <strong>Autores:</strong><br />
          Nycholas (<a href="mailto:nycholasffrocha@gmail.com">nycholasffrocha@gmail.com</a>) e Kauã (<a href="mailto:kauaf6859@hotmail.com">kauaf6859@hotmail.com</a>)
        </Typography>
        <Typography variant="body1" component="p">
          Agradecemos por visitar nosso site. Esperamos que você encontre nossas receitas tanto agradáveis quanto inspiradoras!
        </Typography>
      </Box>
    </Container>
  </div>
);

export default About;
