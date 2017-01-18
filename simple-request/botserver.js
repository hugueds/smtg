const rq = require('request');

var key = process.env.BOT_KEY;

var url = 'https://api.telegram.org/bot'+key+'/sendMessage';

var myId = 170236635;

var form = {
	chat_id : 170236635, 
	text : "<strong> TEST!! </strong>",
	parse_mode : 'HTML'
};

rq.post(url, {form : form}, (err,  res, body) => {
	console.log(url);
	console.err(err);
	console.log(res.statusCode);
	console.log(body);
});

