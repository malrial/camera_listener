var server = require("./server");
var router = require("./router");
var handler = require("./handlers");





server.iniciarServidor(router.route);