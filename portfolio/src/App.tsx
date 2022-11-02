import React from 'react';
import { Grid, Container } from '@mui/material/';

import LeftBar from './components/leftBar/leftBar.component';
import MainContent from './components/mainContent/mainContent.component';
import Footer from './components/footer/footer.component';
import './App.css';

function App() {
  return (
    <Container>
      <Grid container maxWidth="lg" mt={5}>
        <LeftBar />
        <MainContent />
        <Footer />
      </Grid>
    </Container>
  );
}

export default App;
