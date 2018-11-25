var handler = require("./handlers");
function route(pathname){
	
	console.log("enrutando "+pathname);
	if(pathname=="/subir"){
		handler.subir();
	}

}

exports.route = route;