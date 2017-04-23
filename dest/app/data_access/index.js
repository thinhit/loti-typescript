var Constants = require('./../../config/constants');
var mongoose = require('mongoose');
var bluebrid = require('bluebird');

// Set promise adapter for mongoose
mongoose.Promise = bluebrid;

var DataAccess = (function () {
    function DataAccess() {
    }
    DataAccess.connect = function () {
        // Apply singleton partern
        if (this.DBConnection)
            return this.DBConnection;

        this.DBConnection = mongoose.connection;
        this.DBConnection.once('open', function () {
            console.log('MongoDB Connected');
        });

        this.DBInstance = mongoose.connect(Constants.MONGODB_URI_CONNECTION);
        return this.DBInstance;
    };
    return DataAccess;
})();

DataAccess.connect();

module.exports = DataAccess;
