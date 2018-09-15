//Requirements: Node.js,Slack Workspace token






const SlackBot = require('slackbots');
//const axios = require('axios');

const bot = new SlackBot({
	token: 'xoxb-435747743297-437377284503-r0z2b6hIJniKZo1QQle4iGWC',
	name: 'Rolf'
	});
	
	
	
	
	
	
	
	
bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':rolf:'
    };
	
	bot.postMessageToChannel('general', 'Hello Ed Boys', params);
	
	
	});





//Message Handler
bot.on('message', data => {
	const params ={
		icon_emoji: ':rolf:'
	};
	
	
	if(data.type !== 'message'){
		return;
	}
	else {
			RolfResponse(data.text);
			console.log(data);

	}
});


	
	
	
	
	
	
	
	
	/*
function Boy(message){
		
		//const n = (message).split(" ");
    	
    	
    	const params= {
    		icon_emoji: ':laughing:'
    	};
    	
    	bot.postMessageToChannel(
    		'general', 'Hello boy'  , params);
}	
*/
	
	
function RolfResponse(message){
	if(message.includes('advice' || ' help')){
		RolfAdvice();
	}
	else if(message.includes('roast')){
		RolfRoast();
	}
	/**else if(message.includes('Story') || 'Tell me'){
		RolfStory();
	}*/
	else if(message.includes('story')){
		RolfStory();
	}
	else if(message.includes('nothing' ) || message.includes('goodbye' )){
		RolfInsult();
	}
	else{
		return;
	}
}





function RolfAdvice(){
	const params ={
		icon_emoji: ':rolf:'
	};
	bot.postMessageToChannel('general', 'Never use hotwax to soothe the rage of lobsters', params);
	return;
}

function RolfRoast(){
const params ={
		icon_emoji: ':rolf:'
	};
	bot.postMessageToChannel('general', 'YOU HAVE BROKEN THE CELERY STALK ON THE BACK OF A SEA URCHIN!!!!', params);
	return;
}

function RolfStory(){
const params ={
		icon_emoji: ':rolf:'
	};
	bot.postMessageToChannel('general', 'Once upon a time an ugly'+
	' boy was thrown out of his village and hit his melon on a tree!'+
	' The boy looked up and was amazed at the many beautiful heads'+
	 ' growing from its branches!'+
	 ' After many tries–'+
	 ' –he found one that fit, and ran back to the village!'+
	 '  Yes? He became very popular.', params);
	return;
}



function RolfInsult(){
	const params ={
		icon_emoji: ':rolf:'
	};
	bot.postMessageToChannel('general', 'Life too short not to smell the parsley!?', params);
	return;
	
}




