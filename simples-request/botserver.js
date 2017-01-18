const rq = require('request');

var key = '289160806:AAE50V3tvENTrQB9Ynla_Oyav6RqsV914EM';

var url = 'https://api.telegram.org/bot'+key+'/sendMessage';

var myId = 170236635;

var form = {
	chat_id : 170236635, 
	text : "<strong> EITA </strong>",
	parse_mode : 'HTML'
};

rq.post(url, {form : form}, (err,  res, body) => {
	console.log(url);
	console.err(err);
	console.log(res.statusCode);
	console.log(body);
});

