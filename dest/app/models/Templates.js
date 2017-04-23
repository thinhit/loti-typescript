var Templates = (function () {
    function Templates(TemplateModel) {
        this._TemplateModel = TemplateModel;
    }
    Object.defineProperty(Templates.prototype, "content", {
        get: function () {
            return this._TemplateModel.content + "12";
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Templates.prototype, "time_created", {
        get: function () {
            return this._TemplateModel.time_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Templates.prototype, "time_updated", {
        get: function () {
            return this._TemplateModel.time_updated;
        },
        enumerable: true,
        configurable: true
    });
    return Templates;
})();

Object.seal(Templates);
module.exports = Templates;
