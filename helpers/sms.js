var db          = require('../models');
var http        = require('http');
var bodyParser  = require('body-parser');
var twilio      = require('twilio');

var myVar;


exports.sendSMS = function(req, res) {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    const accountSid = 'ACb63c109c52daf392846e20ed706d4afd';
    const authToken = '99e800ac8597937082f6e0e946d66fa7';
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
          .create({
            body: 'Do you need assistance?',
            from: '+14245328392',
            statusCallback: 'https://julies-smoke-detector.herokuapp.com/api/sms',
            to: '+18186352564'
          })
          .then(message => console.log(message.sid));
	 
	  
	
}

exports.callBack = function(req, res) {
    const MessagingResponse = require('twilio').twiml.MessagingResponse;
    const twiml = new MessagingResponse();

    if (req.body.Body == 'Yes') {
        twiml.message('Help is on the way');
        clearTimeout(myVar);
    } else if (req.body.Body == 'No') {
        twiml.message('Glad to hear. Have a good day!');
        clearTimeout(myVar);
    } else {
        twiml.message(
          'Please respond Yes or No'
        );
    }

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}