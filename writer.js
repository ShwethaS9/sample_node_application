/* eslint-disable no-multi-assign */
/* eslint-disable func-names */


/* eslint-disable vars-on-top */
const ResponsePayload = function (code, payload) {
  this.code = code;
  this.payload = payload;
};

exports.respondWithCode = function (code, payload) {
  return new ResponsePayload(code, payload);
};

const writeJson = (exports.writeJson = function (response, arg1, arg2) {
  let code;
  let payload;


  if (arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  if (arg2 && Number.isInteger(arg2)) {
    code = arg2;
  } else if (arg1 && Number.isInteger(arg1)) {
    code = arg1;
  }
  if (code && arg1) {
    payload = arg1;
  } else if (arg1) {
    payload = arg1;
  }

  if (!code) {
    // if no response code given, we default to 200
    code = 200;
  }

  // Handle status 500 server errors.
  if (arg1.status == 500 || arg2 == 500) {
    let noData = {
      status: 'failure',
      error: 'data validation',
    };

    noData = JSON.stringify(noData, null, 2);

    if (!response.headersSent) {
      response.writeHead(203, { 'Content-Type': 'application/json' });
      response.end(noData);
    }
  } else {
    if (typeof payload === 'object') {
      payload = JSON.stringify(payload, null, 2);
    }
    if (!response.headersSent) {
      response.writeHead(code, { 'Content-Type': 'application/json' });
      response.end(payload);
    }
  }
});