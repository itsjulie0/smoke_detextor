var db          = require('../models');
var http        = require('http');
var bodyParser  = require('body-parser');
var twilio      = require('twilio');

var myVar;
var fromNum= "+14245328392"
var emergencyNumber;
var phoneNumber;
var address;
var name;


const accountSid = 'ACb63c109c52daf392846e20ed706d4afd';
const authToken = '99e800ac8597937082f6e0e946d66fa7';
const client = require('twilio')(accountSid, authToken);




exports.sendSMS = function(req, res) {  
    db.userInfo.findOne({}) 
        .then( function(result) {
            name=result.name;
            phoneNumber=result.phoneNumber;
            emergencyNumber=result.emergencyNumber;
            address= result.address;
        });

    client.messages
          .create({
            body: name + ' do you need assistance?',
            from: fromNum,
        //    statusCallback: 'https://julies-smoke-detector.herokuapp.com/api/sms',
            to: phoneNumber
          })
          .then(message => console.log(message.sid));
	 
myVar=setTimeout( function(){
     client.messages
         .create({
            body: "Your emergency contact has been notified.",
            from: fromNum,
            to: phoneNumber
        })
          .then(message => console.log(message.sid));
            client.messages
          .create({
            body: name + " needs help! There is a fire at " + address + ". Please contact authorities",
            from: fromNum,
            to: emergencyNumber
                            })
            .then(message => console.log(message.sid));
}, 15000); //180000 for 3 min
    res.json({message: 'Message Center'});
    //console.log('Sent a message');

}  
	


exports.callBack = function(req, res) {

    const MessagingResponse = require('twilio').twiml.MessagingResponse;
    const twiml = new MessagingResponse();


    db.userInfo.findOne({})
        .then( function(result) {
      name = result.name;
      phoneNumber = result.phoneNumber;
      emergencyNumber = result.emergencyNumber;
      address = result.address
    });
    
            if (req.body.Body == 'Yes') {
                twiml.message('Help is on the way!');
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