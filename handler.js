const fetch = require('node-fetch');

module.exports.contact = async (event, context, callback) => {

  const url = "https://www.google.com/recaptcha/api/siteverify";

    const body = {
        secret: "6Ldf298gAAAAAHRuMz18-3vfN5ReMOSSNwuxBMNl",
        response: event.body.token      
   };

    const params = {
        method: "POST",
        mode: "cors",
        headers: {"X-Requested-With": "XMLHttpRequest"},
        body: JSON.stringify(body)
    };

    const checkToken = await fetch(url, params);
console.log("checkToken",checkToken);
  if (checkToken.data.success === true) {
    const response = {
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
    const response = {
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
  callback(null, response);
}

// https://www.google.com/recaptcha/api/siteverify

