const fetch = require('node-fetch');
import middy from '@middy/core';
import cors from '@middy/http-cors';

const contactHandler = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  const secret_key = "6Ldf298gAAAAAHRuMz18-3vfN5ReMOSSNwuxBMNl"; // process.env.SECRET_KEY;
  const { token } = body;
  const url = `https://www.google.com/recaptcha/api/siteverify`;
  fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        secret: secrey_key,
        token: token
      })
  })
  .then(response => response.json())
  .then(google_response => {
    if (google_response.success === true) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          name: 'Nathan Loudon',
          email: 'vesnathan@gmail.com',
          phone: '0423 867 510',
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
    else {
      callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          name: '',
          email: '',
          phone: '',
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }  
  })
  .catch(error => console.log({ error })); 
}

const middyContactHandler = middy(contactHandler).use(cors());
module.exports.middyContactHandler;






