require('dotenv').config();
const express = require('express');
const router = express.Router();
const DBschema = require('../DBschema/apiDbSchema');
var date = new Date();
var isoDateTime = new Date();
function localdate(){
  isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
  }





//http://localhost:3030/update
router.get('/', function (req, res) {
    res.send('THIS IS THE UPDATE ROUTE')
  }) 


//http://localhost:3030/update/test
  router.get('/:id/:value', function (req, res) {
    console.log(req.params.id, req.params.value)
    res.send(`THIS IS THE UPDATE ROUTE ${req.params.id} ${req.params.value}`)
  })

//UPDATING BY POST
router.post('/', async (req, res) => {
   var idPosted = req.body.id;
   var valuePosted = Number(req.body.value);
   var setpointPosted = Number(req.body.setpoint);
   var locationPosted = String(req.body.location);
   var unitPosted = String(req.body.unit);
   var highAlarmPosted = Number(req.body.highAlarm);
   var lowAlarmPosted = Number(req.body.lowAlarm);
   var alarmActivePosted = Boolean(req.body.alarmActive);



    //value & date 
    if( typeof req.body.value != 'undefined'){
        localdate();
        DBschema.updateMany( 
            {_id: idPosted}, {$push: { "device.data.value": valuePosted, "device.data.updated": isoDateTime}},
            function(err, result) { 
                if (err) {console.log(err);}
                else{console.log('Value and Date updated')}
            }
        )
    }


    //Location
    if( typeof req.body.location != 'undefined'){
        DBschema.updateMany( 
            {_id: idPosted}, {$set:{"device.location": locationPosted}},
            function(err, result) { 
                if (err) {console.log(err);}
                else{console.log('Location inserted')}
              }
        )
    }
    //setpoint
    if( typeof req.body.setpoint != 'undefined'){
        DBschema.updateMany( 
            {_id: idPosted}, {$set:{"device.setpoint": setpointPosted}},
            function(err, result) { 
                if (err) {console.log(err);}
                else{console.log('setpoint inserted')}
              }
        )
    }

    //UNIT
    if( typeof req.body.unit != 'undefined'){
        DBschema.updateMany( 
            {_id: idPosted}, {$set:{"device.unit": unitPosted}},
            function(err, result) { 
                if (err) {console.log(err);}
                else{console.log('unit inserted')}
              }
        )
    }

    //highAlarm
    if( typeof req.body.highAlarm != 'undefined'){
        DBschema.updateMany( 
            {_id: idPosted}, {$set:{"device.highAlarm": highAlarmPosted}},
            function(err, result) { 
                if (err) {console.log(err);}
                else{console.log('High alarm inserted')}
              }
        )
    }

    //LowAlarm
    if( typeof req.body.lowAlarm != 'undefined'){
        DBschema.updateMany( 
            {_id: idPosted}, {$set:{"device.lowAlarm": lowAlarmPosted}},
            function(err, result) { 
                if (err) {console.log(err);}
                else{console.log('Low Alarm inserted')}
              }
        )
    }

    //alarmActive
    if( typeof req.body.alarmActive != 'undefined'){
        DBschema.updateMany( 
            {_id: idPosted}, {$set:{"device.alarmActive": alarmActivePosted}},
            function(err, result) { 
                if (err) {console.log(err);}
                else{console.log('alarmActive inserted')}
              }
        )
    }

  });// END OF UPDATE BY POST
  



  module.exports = router