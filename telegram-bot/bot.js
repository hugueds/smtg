const events = require('events');
const bot = new events.EventEmitter();
const telegram = require('telegram-bot-api');
const colors = require('colors');
//const bot = require('./commands');
const key = process.env.BOT_KEY; //--> HEY, GO AND GET YOUR OWN!
const api = new telegram({
    token: key,
    updates: {
        enabled: true,
        get_interval: 1500
    }
    //USE IT AT YOUR WORK, FOR EXAMPLE
    /*
    http_proxy {
        host : process.env.PROXY_SERVER
        port : process.env.PROXY_PORT
    }
    */
});

var people = []; // --> Retrieve all your bot friends using a local database



//Displays the bot information
api.getMe().then(data => {
    console.info(`Hey my name is ${data.first_name} and it's a pleasure to assist you!`.blue);
});

api.on('message', function (msg) {
    var iKnowYou = true;
    var new_msg;
    var txt = msg.text,
        chat_id = msg.chat.id,
        first_name = msg.chat.first_name;    

    if (people.indexOf(chat_id) == -1) {
        people.push(chat_id);
        iKnowYou = false;
    }!iKnowYou
        ?
        new_msg = `Olá ${msg.from.first_name}, é um prazer conhecer você!\n` :
        new_msg = 'Estou sendo desenvolvido, por favor, aguarde para em breve conversarmos melhor\n ;)';

    if (!isCommand(msg)) {
        new_msg = `Olá ${first_name}, Por favor digite um dos comandos a seguir:\n`;
    } else {
        var param = txt.split(' ');
        bot.emit(param[0], msg);
    }

});

function isCommand(msg) {
    if (!msg.entities) return false;
    if (msg.entities[0].type === 'bot_command') return true;
    return false;
}

function sendMessage(chat_id, text) {
    api.sendMessage({
        chat_id: chat_id,
        text: text
    });
}


bot.on('/date', function (msg) {
    var date = new Date().toLocaleDateString();
    sendMessage(msg.chat.id, date);
});

bot.on('/hello', function (msg) {
    sendMessage(msg.chat.id, 'Hello!');
});

bot.on('welcome', function(){
   sendMessage(170236635, "FALA MANOW") 
});



module.exports = bot;