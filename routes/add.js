var data = require("../data.json");

exports.addFriend = function(request, response) { 
  let name = request.query.name;
	let description = request.query.description;
	let obj = {
		name : name,
		description : description,
		imageURL : 'http://lorempixel.com/500/500/people'
	};

	data.friends.push(obj);
 }
