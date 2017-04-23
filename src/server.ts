import express      = require('express');
import middleware   = require('./config/middleware');
import constants    = require('./config/constants');
import routers      = require('./config/routes');

class Server {
    static app: any;
    constructor (){
        
        Server.prepare();
        Server.middleware();
        Server.routes();
        Server.start();
    }

    static prepare() : express.Application{
        if(this.app) return this.app;
        this.app = express();
        this.app.set('port', constants.HTTP_PORT);
        return this.app;
    }

    static middleware (): any {
        return middleware.configuration;
    }
    static routes (): any {
        this.app.get('/', function (req, res) {
            res.send('hello world')
        })
        return routers.api();
    }
    static start() : any {
        
        return this.app.listen( constants.HTTP_PORT, () => {
            console.log("Server starting at port " + constants.HTTP_PORT);
        })
    }
    
}
export  = Server;