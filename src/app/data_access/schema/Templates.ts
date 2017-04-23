import DataAccess = require('./../../data_access');
import ITemplates = require('../../models/interfaces/ITemplates');
var mongoose = DataAccess.DBInstance;

class Templates {
    static get schema() { 
        var schema = new mongoose.Schema({
            content: {
                type: String,
                required: true
            },
            time_created: {
                type: Number,
                required: false,
                default : () =>{
                    var time_stamp = Math.round(new Date().getTime() / 1000);
                    return time_stamp;
                }
            },
            time_updated: {
                type:Number, 
                required: false, 
                default : () =>{
                    var time_stamp = Math.round(new Date().getTime() / 1000);
                    return time_stamp;
                }
            }
        })
        return schema;
    }
}

var schema = DataAccess.DBConnection.model<ITemplates>("Templates", Templates.schema);

export = schema;