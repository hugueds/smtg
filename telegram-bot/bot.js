const events = require('events');
const cmd = new events.EventEmitter();
const telegram = require('telegram-bot-api');
const colors = require('colors');
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
        host : 'proxyserver.com' 
        port : 8080
    }
    */
});



var people = []; // --> Retrieve all your bot friends using a local database
var command_list = ['NAME', 'NUMBER', 'AGE'];


//Displays the bot information
api.getMe().then(data => {
    console.info(`Hey my name is ${data.first_name} and it's a pleasure to assist you!`.blue);
});

api.on('message', function (msg) {
    var iKnowYou = true;
    var new_msg;
    var txt = msg.text,
        chat_id = msg.chat.id;
    var command = isCommand(txt);
    if (!command) {
        new_msg = `Olá, Por favor digite um dos comandos a seguir:\n${command_list}`;
    } else {
        var param = txt.split(' ');        
        cmd.emit(param[0], param);
    }

    if (people.indexOf(chat_id) == -1) {
        people.push(chat_id);
        iKnowYou = false;
    }

    !iKnowYou ? new_msg = `Olá ${msg.from.first_name}, é um prazer conhecer você!\n` : new_msg = 'Estou sendo desenvolvido, por favor, aguarde para em breve conversarmos melhor\n ;)';

    api.sendMessage({
        chat_id: chat_id,
        text: new_msg
    });

});

function isCommand(txt) {
    return /^\//.test(txt);
}


//COMMAND LIST

cmd.on('/date', function(c){
    
});