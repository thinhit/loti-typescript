var express = require('express');
var routers = express.Router();

var TemplatesRouter = (function () {
    function TemplatesRouter() {
    }
    Object.defineProperty(TemplatesRouter.prototype, "routes", {
        get: function () {
            routers.get('/', function (req, res) {
                return res.json({
                    "error": false,
                    "error_message": "Xin chao"
                });
            });
            return routers;
        },
        enumerable: true,
        configurable: true
    });
    return TemplatesRouter;
})();

module.exports = TemplatesRouter;
