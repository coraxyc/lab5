var data = require("../data.json");

exports.addFriend = function(request, response) { 
  var name = request.query.name;
	var description = request.query.description;
	var obj = {
		name : name,
		description : description,
		imageURL : 'http://lorempixel.com/500/500/people'
	};

	data.friends.push(obj);
 }
