var	express		= require('express'),
	  db     		= require('../models'),
	  router		= express.Router();

router.get('/', (req,res) => {
    res.render('user');
});

router.get('/camera', (req,res) => {
    res.render('camera');
});

router.get('/current_info', (req,res) => {
    //return db.userInfo.findOne();
    db.userInfo.findOne({})
    .then( function(result) {
      //console.log(result.phoneNumber);
      result.phoneNumber = formatPhoneNumber(result.phoneNumber);
      //console.log(result.phoneNumber);
      res.render('info', {info: result});
    })
    .catch (function(err) {
      res.send(err);
      console.log(err);
    });
});


router.post('/configure',  (req,res) =>{

/*
router.post('/seedInfo', (req,res) => {

    var seed = {
      
      firstName: 'julie',
      lastName: 'Naglestad',
      address: 'UCSD',
      aptNumber: '234',
      phoneNumber: '1234354565',
      emergencyNumber: '563456756',
    } */
    db.userInfo.findOneAndUpdate({}, req.body.info , {'new': true, upsert:true})
    .then(function(edited) {
      info = edited;
      res.redirect('/current_info');
  })
      .catch(function(err){
        res.send(err);
  })
});

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    var intlCode = (match[1] ? '+1':'+1')
    return [intlCode,match[2],match[3],match[4]].join('')
    //return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }
  return null
}

module.exports=router;



 