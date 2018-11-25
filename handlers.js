
var mongoRepository =require("./mongoRepository");

function iniciar(){
	console.log("handler iniciar");
}


function subir(){
	console.log("handler subir");
	var myobj = { name: "Company Inc2", address: "Highway 37" };
	mongoRepository.insertLog(myobj);
}

exports.iniciar = iniciar;
exports.subir = subir;