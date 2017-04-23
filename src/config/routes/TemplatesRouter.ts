import express = require('express');
var routers = express.Router();

class TemplatesRouter {
    get routes (){
        routers.get('/', (req, res) => {
            return res.json({
                "error"         : false,
                "error_message" : "Xin chao"
            });
        })
        return routers;   
    }
}

export = TemplatesRouter