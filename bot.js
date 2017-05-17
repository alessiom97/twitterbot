var Twit = require('twit');

var T = new Twit({

  consumer_key:         '8oq20maOuWXFIynBEvmhr50eo',
  consumer_secret:      'YxKfOxoBE99dFHx7xsYgIQvmUDKDs2CwWnI0sseLxXNnRXXzsW',
  access_token:         '856547817149665283-4Oij5WDrCKbfKG2SsTh9aGpmazMyjZL',
  access_token_secret:  'CmU4ZTV17iIPaPwoLKoPlUy133nL1tsbeyrto7h4lRvyA',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

  var array1 = [
    "The wren",
    "From time to time",
    "I kill an ant",
    "Over the wintry",
    "Toward those short trees",
    "Blowing from the west"
  ];

  var array2 = [
    "The clouds give rest",
    "As one who loved poetry",
    "Fallen leaves gather",
    "Lovers, stars themselves,",
    "the mirror I stare into",
    "Along this way but"
  ];

  var array3 = [
    "shows my father's face.",
    "The window frame.",
    "the stallion's coming through",
    "with no leaves to blow.",
    "have been watching.",
    "To the rain in the mountain.",
    "Is full of regret."
  ];

  var myTweet = {
    status: 'blankblank'
  };


function onTweet(err, data, response){
  console.log(data);
}

function sendTweet(){
  var randomVar1 = Math.round(Math.random() * array1.length);
  var randomVar2 = Math.round(Math.random() * array2.length);
  var randomVar3 = Math.round(Math.random() * array3.length);

  myTweet.status = (array1[randomVar1]+ " " + array2[randomVar2] + " " + array3[randomVar3]);
  T.post('statuses/update', myTweet, onTweet);

}
sendTweet();
setInterval(sendTweet, 1000*30);
