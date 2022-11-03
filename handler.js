const fetch = require('node-fetch');

module.exports.contact = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  const secret_key = "6Ldf298gAAAAAHRuMz18-3vfN5ReMOSSNwuxBMNl"; // process.env.SECRET_KEY;
  const { token } = body;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
  let response = {}
  fetch(url, {
      method: 'post'
  })
  .then(response => response.json())
  .then(google_response => {
    if (google_response.success === true) {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          status: 'success',
          message: {
            name: 'Nathan Loudon',
            email: 'vesnathan@gmail.com',
            phone: '0423 867 510',
          },
          input: event,
        })
      };
    }
    else {
      response = {
        statusCode: 400,
        body: JSON.stringify({
          status: 'error',
          message: {
            name: '',
            email: '',
            phone: '',
          },
          input: event,
        })
      };
    }
    callback(null, JSON.stringify(response));
  })
  .catch(error => console.log({ error })); 
}



