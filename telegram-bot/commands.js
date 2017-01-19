//Commands
//  1. Get a POPID in a Station - [[function], [station]]
//  2. Get all Parameters of a POPID - [[function] [station] [position]]
//  3. Get all POPIDs in All Stations
//  4. Get an 
//  5. 

const events = require('events');
const bot = new events.EventEmitter();

bot.on('/date', function(data, callback){
    var date = new Date().toLocaleDateString();    
});

module.exports = bot;