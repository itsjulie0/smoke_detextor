/*var	  express		  = require('express'),
	  bodyParser 	  = require('body-parser'),
	  app	      	  = express(),
	  twilio        = require('twilio');

var 	indexRoutes 	 = require('./routes/index'),
      apiRoutes        = require('./routes/api');

app.set('port', (process.env.PORT || 3000));
/*app.get('/', (req,res) => {
  res.send("I am loading the home page");
});*//*
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*

/*************** ROUTES ****************/
/*
app.use('/', indexRoutes);
app.use('/api', apiRoutes);
*/
/*
app.get('/', (req,res) => {
        res.render('user');

       
    });
app.get('/camera', (req,res) => {
  res.render('camera');
});

app.get('/current_info', (req,res) => {
  res.render('info');

/*   db.userInfo.findOneandUpdate({}, userInfo, {'new':true}, {upsert: true})
		.then( function(edited) {
			console.log(edited);
			res.redirect('/');
		})
		.catch(function(err){
			res.send(err);
			
		});

});

app.post('/configure',  (req,res) =>{
    console.log(req.body.options)
    res.redirect('/');

});
*/
/*
app.listen(app.get('port'),() => console.log('Listening on port ' + app.get('port')));
//app.get('/api/sms');

const account_sid = "ACb63c109c52daf392846e20ed706d4afd"
const auth_token = "99e800ac8597937082f6e0e946d66fa7"
const client = require('twilio')(account_sid,auth_token);

client.messages
  .create({
    body: 'whats up?',
    from: "+14245328392",
    statusCallback: '/api/sms',
    to  : "+18186352564"
   })
  .then(message => console.log(message.sid));

*/

var	  express		  = require('express'),
  	  bodyParser 	= require('body-parser'),
  	  twilio      = require('twilio'),
      app         = express(),
      http        = require('http');
      db          = require('./models');



var
	    indexRoutes 	 = require('./routes/index'),
      apiRoutes        = require('./routes/api');

     


app.set('port', (process.env.PORT || 3000));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



/*************** ROUTES ****************/

app.use('/', indexRoutes);
app.use('/api', apiRoutes);

app.listen(app.get('port'),() => console.log('Listening on port ' + app.get('port')));
/************** Text ******************/
/*
const account_sid = "ACb63c109c52daf392846e20ed706d4afd"
const auth_token = "99e800ac8597937082f6e0e946d66fa7"
const client = require('twilio')(account_sid,auth_token);

db.userInfo.findOneandUpdate({}, userInfo, {'new':true}, {upsert: true})
    .then( function(edited) {
      console.log(edited)
      res.redirect('/');
    })
    .catch(function(err){
      res.send(err);
});


client.messages
  .create({
    body: "Do you need assistance?",
    from: "+14245328392",
    to: db.userInfo.phoneNumber
   })
   .then(message => console.log(message.sid))

*/