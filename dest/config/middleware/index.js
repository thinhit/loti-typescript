var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var Middleware = (function () {
    function Middleware() {
    }
    Object.defineProperty(Middleware, "configuration", {
        get: function () {
            var app = express();
            app.use(bodyParser);
            app.use(cookieParser);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Middleware;
})();

module.exports = Middleware;
