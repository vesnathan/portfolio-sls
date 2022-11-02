import './leftBar.component.css';
import React from 'react';
import { Grid } from '@mui/material/';
import MernLogo from '../../assets/images/mern.webp';
import ContentSection from '../contentSection/contentSection.component';

const LeftBar = (): JSX.Element => (
  <Grid item xs={3} className="leftBarWrapper">
    <img src={MernLogo} alt="MERN Logo" width="100%" />
    <h1>NATHAN LOUDON</h1>
    <p>
      I&#39;m a full-stack web developer with a passion
      for creating user-friendly online experiences.
    </p>
    <p>
      I&#39;m seeking junior role in order to further my skills.
    </p>
    <ContentSection text="contact" headerVariant="dark" />
    <ContentSection text="skills" headerVariant="dark" />
    <ContentSection text="education" headerVariant="dark" />
    <ContentSection text="interests" headerVariant="dark" />
    <ContentSection text="referees" headerVariant="dark" />
  </Grid>
);
export default LeftBar;
