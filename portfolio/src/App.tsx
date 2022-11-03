import React from 'react';
import { Grid, Container } from '@mui/material/';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// eslint-disable-next-line import/no-named-as-default
import AppStateContext from './utils/AppStateContext';

import LeftBar from './components/leftBar/leftBar.component';
import MainContent from './components/mainContent/mainContent.component';
import Footer from './components/footer/footer.component';
import './App.css';

function App() {
  return (
    <AppStateContext>
      <GoogleReCaptchaProvider reCaptchaKey="6Ldf298gAAAAAPOMeIj62wcusoDZy9TzHDZsBTCC">
        <Container>
          <Grid container maxWidth="lg" mt={5}>
            <LeftBar />
            <MainContent />
            <Footer />
          </Grid>
        </Container>
      </GoogleReCaptchaProvider>
    </AppStateContext>
  );
}

export default App;
