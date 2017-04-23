var TemplateSchema = require('./../../app/data_access/schema/Templates');
var TemplateModel = require('./../../app/models/Templates');

var TemplateController = (function () {
    function TemplateController() {
    }
    TemplateController.get = function (req, res) {
        var obj = {
            "content": "Hello world"
        };

        TemplateSchema.findOne(function (err, docs) {
            docs = new TemplateModel(docs);

            return res.json({
                'error': false,
                'error_message': "Hello world",
                'data': docs.content
            });
        });
    };
    return TemplateController;
})();
module.exports = TemplateController;
