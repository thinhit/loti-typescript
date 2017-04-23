var express = require('express');
var middleware = require('./config/middleware');
var constants = require('./config/constants');

var Server = (function () {
    function Server() {
        Server.prepare();
        Server.middleware();
        Server.start();
    }
    Server.prepare = function () {
        if (this.app)
            return this.app;
        this.app = express();

        //this.app.set('port', constants.HTTP_PORT);
        return this.app;
    };

    Server.middleware = function () {
        return middleware.configuration();
    };
    Server.routes = function () {
        //return routers.api().mobile();
    };
    Server.start = function () {
        return this.app.listen(constants.HTTP_PORT, function () {
            console.log("Server starting at port " + constants.HTTP_PORT);
        });
    };
    return Server;
})();
module.exports = Server;
