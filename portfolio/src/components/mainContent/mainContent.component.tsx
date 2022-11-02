import './mainContent.component.css';
import React from 'react';
import { Grid } from '@mui/material/';

import ContentSection from '../contentSection/contentSection.component';

const MainContent = (): JSX.Element => (
  <Grid item xs={9} className="mainContentWrapper">
    <ContentSection text="profile" headerVariant="light" />
    <ContentSection text="portfolio" headerVariant="light" />
  </Grid>
);
export default MainContent;
