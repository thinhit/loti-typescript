import TemplateSchema    = require('./../../app/data_access/schema/Templates');
import TemplateModel     = require('./../../app/models/Templates');
import TemplateInterface = require('./../../app/models/interfaces/ITemplates');

class TemplateController {
    static get(req, res) {
        
        var obj = <TemplateInterface> {
            "content": "Hello world"
        };
        
        TemplateSchema.findOne(function (err, docs){
                docs =  new TemplateModel(docs)

                return res.json({
                    'error': false,
                    'error_message' : "Hello world",
                    'data'  : docs.content
                })
        })
        
        
    }
}
export  = TemplateController;