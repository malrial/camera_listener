
var mongoRepository =require("./mongoRepository");


//Fucion inicializar
function iniciar(){
	console.log("handler iniciar");
}


//Funcion de subir log
function subir(){
	console.log("handler subir");

	var myobj = { name: "Company Inc2", address: "Highway 37" };

	//inserta el log en el repositorio mongodb
	mongoRepository.insertLog(myobj);
}

exports.iniciar = iniciar;
exports.subir = subir;