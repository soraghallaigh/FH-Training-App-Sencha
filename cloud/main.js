function getTweets() {
  var username   = 'feedhenry';
  var num_tweets = 10;
  var url        = 'http://search.twitter.com/search.json?q=' + username;

  return $fh.web({
    url: url,
    method: 'GET',
    allowSelfSignedCert: true
  });
}

function getPoints() {
  return {
    locations: [
      {
        lat: '52.245671',
        lon: '-7.080002'
      },
      {
        lat: '52.257861',
        lon: '-7.136993'
      }
    ]
  }
}