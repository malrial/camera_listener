
var mongoRepository =require("./mongoRepository");


//Fucion inicializar
function iniciar(){
	console.log("handler iniciar");
}


//Funcion de subir log
function subir(){
	console.log("handler subir");

	var dt = new Date();
	var utcDate = dt.toUTCString();

	var myobj = { name: "Evento", timestamp: utcDate };

	//inserta el log en el repositorio mongodb
	mongoRepository.insertLog(myobj);
}

exports.iniciar = iniciar;
exports.subir = subir;