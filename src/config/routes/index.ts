import TemplateRoute    = require('./TemplatesRouter')

import express          = require('express');

var app = express();


class Route{
    static api () {
        
        app.use('/api/templates', new TemplateRoute().routes);
        return app;
    }
    static mobile (){
        return this;
    }
}

export = Route