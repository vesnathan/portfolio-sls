/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

import { useAppContext } from '../utils/AppStateContext';
import { apiPath } from '../constants/constants';

import {
  UPDATE_CONTACT_SHOW,
  UPDATE_CONTACT_EMAIL,
  UPDATE_CONTACT_PHONE,
} from '../utils/actions';

interface ResponseMessageInterface {
  name: string,
  email: string,
  phone: string,
}

interface ResponseDataInterface {
  data: ResponseMessageInterface,
  status: string
}

const RecaptchaButton = () => {
  const state: any = useAppContext();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      // eslint-disable-next-line no-console
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('getContactDetails');

    try {
      fetch(`${apiPath}/contact/details`, {
        method: 'POST',
        body: JSON.stringify({ token }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log('response', response);
          state.updateAppState(
            {
              newDispatches:
            [
              { which: UPDATE_CONTACT_SHOW, data: true },
              { which: UPDATE_CONTACT_EMAIL, data: response.data.message.email },
              { which: UPDATE_CONTACT_PHONE, data: response.data.message.phone },
            ],
            },
          );
        });
    // eslint-disable-next-line no-console
    } catch (err) { console.log(err); }
  }, [executeRecaptcha]);

  return <Button onClick={handleReCaptchaVerify} variant="contained">VIEW</Button>;
};
const Contact = () => {
  const state: any = useAppContext();
  const {
    showContactDetails,
    contactPhone,
    contactEmail,
  } = state.state;
  return (
    (!showContactDetails)
      ? (
        <table className="buttonTable">
          <tbody>
            <tr><td><RecaptchaButton /></td></tr>
          </tbody>
        </table>
      )
      : (
        <table className="detailsTable">
          <tbody>
            <tr>
              <td><PhoneAndroidIcon fontSize="small" /></td>
              <td id="contactPhone">{contactPhone}</td>
            </tr>
            <tr>
              <td><EmailIcon fontSize="small" /></td>
              <td id="contactEmail">{contactEmail}</td>
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
          </tbody>
        </table>
      )
  );
};

export default Contact;
