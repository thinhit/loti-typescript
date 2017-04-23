var express = require('express');
var TemplateController = require('../../http/controllers/TemplateController');
var routers = express.Router();

var TemplatesRouter = (function () {
    function TemplatesRouter() {
    }
    Object.defineProperty(TemplatesRouter.prototype, "routes", {
        get: function () {
            routers.get('/', TemplateController.get);
            return routers;
        },
        enumerable: true,
        configurable: true
    });
    return TemplatesRouter;
})();

module.exports = TemplatesRouter;
