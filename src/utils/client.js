"use strict";

var request = require("request");

var callingUrl = function (requestBody, method) {
  console.log("*********** ",requestBody);
  return new Promise((resolve, reject) => {
    /** Pass the options for the request  that is sent */
    var options = {
      method: method,
      rejectUnauthorized: true,
      body: requestBody,
      timeout: 30000,
      json: true,
      jsonReviver: true
    };
    if(method=="GET")
      options['url'] = "http://localhost:3004/data?id="+requestBody.id;
    else if(method=="PUT")
      options['url'] = "http://localhost:3004/data/"+requestBody.updatingID;
    else
      options['url'] ="http://localhost:3004/data";
    /** Call back to get the response that is sent */
    function callback(error, response, body) {
      try {
        if (error) {
          console.log("Call failed due to error " + error, "", "EID");
          return reject(error);
        }
        if (response) {
          if (response.statusCode == 200) {
            console.log(JSON.stringify(body));
            return resolve(body);
          }
          if (response.statusCode == 401) {
            console.log(
              "Call failed due to Authorization error");
            return reject("Authorization error");
          } else {
            console.log(
              "Response from remote microservice..",
              response.statusCode,
              "EID"
            );
            return reject(body);
          }
        } else {
          console.log("Call failed due to unknown error", "UNKNOWN", "EID");
          return reject(
            "Please check if the site you are accessing is up and reachable."
          );
        }
      } catch (err) {
        console.log("Call failed due to exception ", "UNKNOWN", "EID");
        return reject(err.message);
      }
    }
    /** Make a request to send the data */
    request(options, callback);
  });
};



module.exports.callingUrl = callingUrl;

