var request = require('request');

exports.addLog = function(thingId, owner, value){

	var formData = {
		"thingId":  thingId,
		"value":  value,
		"owner":  owner
	};

	request.post('https://pipeero-rest-api.herokuapp.com/pipe/log', {form:formData}, function optionalCallback(err, httpResponse, body) {
		if (err) {
			return console.error('upload failed:', err);
		}
		console.log('Upload successful!  Server responded with:', body);
	});
}
