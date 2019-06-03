var express             = require('express'),
	    router              = express.Router(),
	    db                  = require('../models'),
	    userinfoHelpers     = require('../helpers/userinfo'),
      smsHelpers          = require('../helpers/sms');
/******** sensor readings **********/

router.route('/userinfo')
    .get(userinfoHelpers.getUserInfo)
    .post(userinfoHelpers.editUserInfo)
    .delete(userinfoHelpers.deleteUserInfo);

router.route('/userinfo/:id')
    .get(userinfoHelpers.getOneUserInfo)
    .delete(userinfoHelpers.deleteOneUserInfo);

router.route('/sms')
    .get(smsHelpers.sendSMS)
    .post(smsHelpers.callBack);

module.exports = router;


