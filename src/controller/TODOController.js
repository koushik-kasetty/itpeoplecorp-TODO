'use strict'
var Client = require('../utils/client')

module.exports.Controller = function (app) {

  app.get('/item/get/:id', function (req, res) {
    try {
      console.log(" into get service ", req.params.id);
      Client.callingUrl({"id":req.params.id}, "GET").then(result => {  
        console.log(result)      
        res.status(200).json({ "isSuccessful1": true, "result":result });
      }).catch(error => {
        res.status(400).json({ "isSuccessful": error });
      })
    } catch (e) {
      res.status(400).json({ "isSuccessful": false });
    }
  });


  app.post('/item/insert/', function (req, res) {
    console.log(req.body);
    try {
      Client.callingUrl(req.body, "POST").then(result => {  
        console.log(result)      
        res.status(200).json({ "isSuccessful1": true, "result":result });
      }).catch(error => {
        res.status(400).json({ "isSuccessful": error });
      })      
    } catch (e) {
      res.status(400).json({ "isSuccessful": false });
    }
  });


  app.put('/item/update/:id', function (req, res) {
    try {
      req.body['updatingID'] = req.params.id;
      Client.callingUrl(req.body, "PUT").then(result => {  
        console.log(result)      
        res.status(200).json({ "isSuccessful1": true, "result":result });
      }).catch(error => {
        res.status(400).json({ "isSuccessful": error });
      })      
    } catch (e) {
      res.status(400).json({ "isSuccessful": false });
    }
  });
}
