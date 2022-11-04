import fetch from 'node-fetch';
import middy from '@middy/core';
import cors from '@middy/http-cors';

const contactHandler = async (event, context) => {
  const body = JSON.parse(event.body);
  const secret_key = "6Ldf298gAAAAAHRuMz18-3vfN5ReMOSSNwuxBMNl"; // process.env.SECRET_KEY;
  const { token } = body;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
  try {
    const response = await fetch(url, {method: 'POST'});
    const google_response = await response.json();
    console.log("google_response",google_response);
    if (google_response.success === true && google_response.score > .7) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          status: "SUCCESS",
          name: 'Nathan Loudon',
          email: 'vesnathan@gmail.com',
          phone: '0423 867 510',
        }),
      };
    }
    return {
      statusCode: 403,
      body: JSON.stringify({
        status: "ERROR",
        message: 'ERROR 365.214',
      }),
    }; 
  } catch(error) {() => {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "ERROR",
        message: 'ERROR 542.198',
      }),
    }; 
  }}
}

export const middyContactHandler = middy(contactHandler).use(cors({ 
  allowedOrigins: ['*'],
  allowMethods: ['GET, POST, PATCH, PUT, DELETE, OPTIONS'],
  allowHeaders: ['Origin, Content-Type, X-Auth-Token'],
  credentials: true
}))