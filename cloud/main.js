function getTweets() {
  //var url      = 'http://api.twitter.com/1/statuses/user_timeline/' + username + '.json?callback=?';
  //var url        = 'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=' + username + '&count=' + num_tweets;

  var username   = 'feedhenry';
  var num_tweets = 10;;
  var url        = 'http://search.twitter.com/search.json?q=' + username;

  return $fh.web({
    url: url,
    method: 'GET',
    allowSelfSignedCert: true
  });
}