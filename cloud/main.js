function getTweets() {
  var username = 'feedhenry';
  var url      = 'http://api.twitter.com/1/statuses/user_timeline/' + username + '.json?callback=?';

  return $fh.web({
    url: url,
    method: 'GET'
  });
}