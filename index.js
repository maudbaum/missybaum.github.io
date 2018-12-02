function switchMap(name)
{
	document.getElementById("campus-map").data = name;
}

function switchInfo(title, body)
{
	window.top.postMessage({title: title, body: body}, '*'); 
}

window.addEventListener('message', function(event) { 
	console.log(event.data);
	document.getElementById("info-heading").innerHTML = event.data.title;
	document.getElementById("info").innerHTML = event.data.body;
	//console.log(event.origin);
    // // IMPORTANT: Check the origin of the data! 
    // if (~event.origin.indexOf('http://yoursite.com')) 
    // { 
    //     console.log(event.data); 
    // } else { 
    //     console.log("don't hack me!");
    //     return; 
    // } 
}); 