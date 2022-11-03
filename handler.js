const fetch = require('node-fetch');
	
// const middy = require('middy');
// const { cors } = require('middy/middlewares');

const contactHandler = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  const secret_key = "6Ldf298gAAAAAHRuMz18-3vfN5ReMOSSNwuxBMNl"; // process.env.SECRET_KEY;
  const { token } = body;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
  let response = {}
  fetch(url, {
      method: 'post',
  })
  .then(response => response.json())
  .then(google_response => {
    if (google_response.success === true) {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          name: 'Nathan Loudon',
          email: 'vesnathan@gmail.com',
          phone: '0423 867 510',
        })
      };
    }
    else {
      response = {
        statusCode: 400,
        body: JSON.stringify({
          name: 'error',
          email: '',
          phone: '',
        })
      };
    }
    console.log("response before return",JSON.stringify( response));
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        name: 'Nathan Loudon',
        email: 'vesnathan@gmail.com',
        phone: '0423 867 510',
      })
    });
  })
  .catch(error => console.log({ error })); 
}
	
// const contactHandler = middy(contact)
//   .use(cors()) // Adds CORS headers to responses
 
module.exports = { contactHandler }



