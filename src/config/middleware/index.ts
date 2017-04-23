import express      = require('express');
import bodyParser   = require("body-parser");
import cookieParser   = require("cookie-parser");

class Middleware {
    static get configuration (): any {
        var app = express();
        app.use(bodyParser);
        app.use(cookieParser);
        return app;
    }
}

export =  Middleware;