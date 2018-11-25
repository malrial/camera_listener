var server = require("./server");
var router = require("./router");






server.iniciarServidor(router.route);