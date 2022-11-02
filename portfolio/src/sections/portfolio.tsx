import React from 'react';
import { Grid } from '@mui/material/';

// @ts-ignore
import BlackJack from '../assets/images/blackjack.PNG';
// @ts-ignore
import OnlyBlogs from '../assets/images/onlyBlogs.PNG';

const Portfolio = () => (
  <Grid container>
    {/* // ---------------------------------------------- BLACKJACK */}
    <Grid item xs={4} p={2}>
      <img src={BlackJack} alt="Blackjack App" />
    </Grid>
    <Grid item xs={8} p={2}>
      <h4>BlackJack Advantage Play Training App</h4>
      <p>
        This app is designed to teach the user how to use basic
        strategy and card counting to lower the odds at the casino.
      </p>
      <p>
        The front-end is built using React, and utilises useContext
        and useReducer hooks for state management. The backend utilises MongoDB and
        GraphQL, and JWT for authentication. Payments are made through Stripe Elements.
      </p>
    </Grid>
    {/* // ---------------------------------------------- OnlyBlogs */}
    <Grid item xs={4} p={2}>
      <img src={OnlyBlogs} alt="Micro-Billing App" />
    </Grid>
    <Grid item xs={8} p={2}>
      <h4>Micro Billing App</h4>
      <p>
        This site allows readers to support their favourite bloggers using micro-payments.
        A splash page is inserted onto the bloggers post requiring the reader to join the
        site and purchase credits.
        Bloggers join the site and add a URL to the posts they wish to monetise.
      </p>
    </Grid>
  </Grid>

);

export default Portfolio;
