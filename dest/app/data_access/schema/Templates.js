var DataAccess = require('./../../data_access');

var mongoose = DataAccess.DBInstance;

var Templates = (function () {
    function Templates() {
    }
    Object.defineProperty(Templates, "schema", {
        get: function () {
            var schema = new mongoose.Schema({
                content: {
                    type: String,
                    required: true
                },
                time_created: {
                    type: Number,
                    required: false,
                    default: function () {
                        var time_stamp = Math.round(new Date().getTime() / 1000);
                        return time_stamp;
                    }
                },
                time_updated: {
                    type: Number,
                    required: false,
                    default: function () {
                        var time_stamp = Math.round(new Date().getTime() / 1000);
                        return time_stamp;
                    }
                }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return Templates;
})();

var schema = DataAccess.DBConnection.model("Templates", Templates.schema);

module.exports = schema;
