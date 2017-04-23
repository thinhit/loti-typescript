import express = require('express');
import TemplateController = require('../../http/controllers/TemplateController');
var routers = express.Router();

class TemplatesRouter {
    get routes (){
        
        routers.get('/', TemplateController.get)
        return routers;   
    }
}

export = TemplatesRouter