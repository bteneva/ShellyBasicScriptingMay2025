let url = "http://192.168.0.101:3030/jsonstore/blog/posts";
Shelly.call("HTTP.GET", {url: url}, function(response){
	let responseObj = JSON.parse(response.body);

	for(let device in responseObj){
		console.log(responseObj[device].title);
	}
});
