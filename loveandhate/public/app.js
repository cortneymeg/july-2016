var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'qdSNMqWEQOAoUZE020RpFF5Xu',
  consumer_secret: 'mUhIMolmei5gPfW7jFVP4BgFDHndNrQqTRv5VNicpBLAlzYL9N',
  access_token_key: '3241580940-5kywrXUuXV3NhxrFePGjcORbE3yEyzMohvwmt1m',
  access_token_secret: 'WFCyxyGTF64VhgJWFQjlExdzb4liql2AX4oflXSa6st5s'
});

client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    throw error;
  });
});

