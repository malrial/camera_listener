
const LOG = "/log";

var handler = require("./handlers");


// Eruta un endpoint hacia su handler definido
function route(pathname){
	
	console.log("enrutando "+pathname);

	if(pathname==LOG){
		handler.subir();
	}

}

exports.route = route;