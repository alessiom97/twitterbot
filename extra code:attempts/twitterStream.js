var Twit = require('twit');

var T = new Twit({

  consumer_key:         '8oq20maOuWXFIynBEvmhr50eo',
  consumer_secret:      'YxKfOxoBE99dFHx7xsYgIQvmUDKDs2CwWnI0sseLxXNnRXXzsW',
  access_token:         '856547817149665283-4Oij5WDrCKbfKG2SsTh9aGpmazMyjZL',
  access_token_secret:  'CmU4ZTV17iIPaPwoLKoPlUy133nL1tsbeyrto7h4lRvyA',
  timeout_ms:           60*1000,
});

var twitStream = client.stream('statuses/filter', {track: '#hello'}, function(stream) {

  stream.on('data', function(tweet) {

    console.log(tweet.text);

    var statusObj = {status: "Hi @" + tweet.user.screen_name + ", here's your Haiku! "}

    T.post('statuses/update', statusObj,  function(error, tweetReply, response){

      if(error){
        console.log(error);
      }
      console.log(tweetReply.text);
    });
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
