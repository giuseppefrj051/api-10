const mongoose = require('mongoose');
 
const apiSchema = new mongoose.Schema({

        
        device: {
                location: {type: String},
                setpoint: {type: Number},
                unit: {type: String}, 
                highAlarm: {type: Number},
                lowAlarm: {type: Number},
                alarmActive: {type: Boolean},
                data:{
                        value: [{type: Number, required: true}],
                        updated: [{type: Date, default: Date.now}]
                }
              }
        
});

module.exports = mongoose.model('NodeMcu32s-001', apiSchema);   //here you can set a DB name ''