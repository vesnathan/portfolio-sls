/* eslint-disable import/prefer-default-export */

export const apiPath = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:3000/dev'
  : 'https://zzyixweon7.execute-api.ap-southeast-2.amazonaws.com/dev';
