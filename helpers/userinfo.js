var db = require('../models');

exports.getUserInfo = function(req, res) {
	    db.userInfo.find()
	    .then( function(userinfo) {
		            res.json(userinfo);
		        })
	    .catch( function(err) {
		            res.send(err);
		        });
}

exports.editUserInfo = function(req, res) {
    db.Stats.findOneAndUpdate({}, req.body, {'new': true, upsert: true})
    .then( function(editedUserInfo) {
        res.json(editedUserInfo);
    })
    .catch( function(err) {
        res.send(err);
    });
}

exports.deleteUserInfo = function(req, res) {
	    db.userInfo.remove({})
	    .then( function() {
		            res.json({message: 'userInfo wiped' });
		        })
	    .catch(function (err) {
		            res.send(err);
		        });
}

exports.getOneUserInfo = function(req, res) {
	    db.userInfo.findById(req.params.id)
	    .then( function(foundUserInfo) {
		            res.json(foundUserInfo);
		        })
	    .catch(function (err) {
		            res.send(err);
		        });
}

exports.deleteOneUserInfo = function(req, res) {
	    db.userInfo.remove({ _id: req.params.id})
	    .then( function() {
		            res.json({message: 'Successfully deleted' });
		        })
	    .catch(function (err) {
		            res.send(err);
		        });
}
