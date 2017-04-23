import Constants = require('./../../config/constants');
import mongoose = require('mongoose');
import bluebrid = require('bluebird');
// Set promise adapter for mongoose

mongoose.Promise = bluebrid;

class DataAccess {
    static DBInstance: any;
    static DBConnection: mongoose.Connection;

    static connect(): mongoose.Connection {
        // Apply singleton partern
        if(this.DBConnection) return this.DBConnection;

        this.DBConnection = mongoose.connection;
        this.DBConnection.once('open', () => {
            console.log('MongoDB Connected')
        })

        this.DBInstance = mongoose.connect(Constants.MONGODB_URI_CONNECTION);
        return this.DBInstance;
    }
}

DataAccess.connect();

export = DataAccess