var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/saidb');


var auth = function(req, res, next) {
	console.log("Auth");
	console.log(req.session)
	if (req.session && req.session.admin) {
		console.log("success");
		return next();
	} else {
		console.log("failed");
	    return res.sendStatus(401);
	}
}

// Login endpoint
router.post('/login', function (req, res) {
	var collection = db.get("login");
	//var data;
	collection.find({}, function(err, details) {
		//res.json(details);
		if (!req.body.username || !req.body.password) {
	    	res.send('login failed');   
		} else if(req.body.username === details[0].name && req.body.password === details[0].password ) {
	    	req.session.admin = true;
	    	console.log("after login")
	    	console.log(req.session)
	    	var data = {
	    		"status": "success",
	    		"message": "login success!"
	    	}
	    	res.send(data);
		} else {
			var data = {
	    		"status": "failure",
	    		"message": "login failed"
	    	}
			res.send(data);
		}
	});
	
});

// Logout endpoint
router.get('/logout', auth, function (req, res) {
	req.session.destroy();
	res.send("logout success!");
});

//Getting  Details endpoint
router.get("/data", auth, function(req, res) {
	var collection = db.get('details');
	collection.find({}, function(err, details){
		if (err) throw err;
		res.json(details);
	});
});


//Get details by ID endpoint
router.get("/data:id", auth, function(req, res) {
	var collection = db.get('details');
	collection.find({id: parseInt(req.params.id)}, function(err, details){
		if (err) throw err;
		res.json(details);
	});
});


//Adding Details endpoint
router.post("/data", auth, function(req, res) {
	var collection = db.get("details");
	collection.count({id : parseInt(req.body.id)},function(err,count){
	    if(!err){
	        if(count>0){
	            //send the response that its duplicate.
	            
	            //console.log(errorororrrroror);
	            res.send("r");
	        }
	    }
	});
	console.log("request", req.body);
	collection.insert({ id: parseInt(req.body.id), 
						website: req.body.website, 
						subtitle: req.body.subtitle, 
						url: req.body.url }, 
						function(err, details) {
							if(err) throw err;
							res.json(details);
						})
});


//Editing Details endpoint
router.put("/data", auth, function(req,res){
	var collection = db.get("details");
	collection.update({id: parseInt(req.body.id)},
					  {id: parseInt(req.body.id), website: req.body.website, subtitle: req.body.subtitle, url: req.body.url},
					  function(err, details){
						  if(err) throw err;
						  res.json(details);
					  })
});


//Deleting details endpoint
router.delete("/data", auth, function(req,res){
	var collection = db.get("details");
	collection.remove({id: parseInt(req.body.id)}, function(err, details){
		if(err) throw err;
		res.json(details);
	})
});


module.exports = router;