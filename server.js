	 
	var http = require("http");
	var url = require("url");
	

	function iniciarServidor(route){

		function onRequest(request,response){
			var pathname = url.parse(request.url).pathname;
			console.log("peticion " + pathname +" recibida");

			route(pathname);

			response.writeHead(200,{"Content-type":"text/html"});
			response.write("Hola 113");
			response.end();
		};


		http.createServer(onRequest).listen(8081);
		console.log("Server started");
	}

	exports.iniciarServidor = iniciarServidor;