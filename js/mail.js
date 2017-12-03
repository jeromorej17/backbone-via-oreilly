function Message (subject, recipient, content) {
    this.subject = subject;
    this.recipient = recipient;
    this.content = content;    
}

 Message.prototype = {
 	constructor: Message,
 	sendMessage: function(){
 		console.log('sending message to ' + this.recipient);
 	},
 	showMessage: function(){
        console.log('[To:] ' + this.recipient + ' [subject:] ' + this.subject + ' [Message:] ' + this.content);
 }
};

var myEmail = new Message('Javascript is cool', 'everythingisgood@goodhealth.com', 'Creating object is simple in Javascript');
myEmail.sendMessage();
myEmail.showMessage();

console.log(Message.prototype);	

var workMessage = new Message('Work Completed', 'boss@mycorp.com', 'My work is done here');
var socialMessage = new Message('Time to go out', 'friends@gmail.com', 'Finish work now');
workMessage.sendMessage();
socialMessage.sendMessage();
console.log(workMessage);
console.log(workMessage.__proto__);