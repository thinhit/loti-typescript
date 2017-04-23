var TemplateRoute = require('./TemplatesRouter');

var express = require('express');

var app = express();

var Route = (function () {
    function Route() {
    }
    Route.api = function () {
        app.use('/api/templates', new TemplateRoute().routes);
        return app;
    };
    Route.mobile = function () {
        return this;
    };
    return Route;
})();

module.exports = Route;
