import React from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const contact = () => (
  <table>
    <tr>
      <td><PhoneAndroidIcon fontSize="small" /></td>
      <td>0423 867 510</td>
    </tr>
    <tr>
      <td><EmailIcon fontSize="small" /></td>
      <td>vesnathan@gmail.com</td>
    </tr>
    <tr>
      <td><HomeIcon fontSize="small" /></td>
      <td>Currently residing in Hobart, Relocating to Sydney or Brisbane early 2023</td>
    </tr>
    <tr>
      <td />
      <td />
    </tr>
    <tr>
      <td><GitHubIcon fontSize="small" /></td>
      <td>github.com/vesnathan</td>
    </tr>
    <tr>
      <td><LinkedInIcon fontSize="small" /></td>
      <td>linkedin.com/nathan-loudon/</td>
    </tr>
  </table>
);

export default contact();
