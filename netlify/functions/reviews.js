const fetch = require('node-fetch');

exports.handler = async function(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from reviews function placeholder" })
  };
};