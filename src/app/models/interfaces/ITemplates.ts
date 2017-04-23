import mongoose = require('mongoose');

interface ITemplates extends mongoose.Document{
    // scenario_id: mongoose.Types.ObjectId,
    // transport_id: mongoose.Types.ObjectId,
    content: string,
    time_created: number,
    time_updated: number

}
export = ITemplates