module.exports.contact = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: {
        name: 'Nathan Loudon',
        email: 'vesnathan@gmail.com',
        phone: '0423 867 510',
      },
      input: event,
    })
  };
  callback(null, response);
}