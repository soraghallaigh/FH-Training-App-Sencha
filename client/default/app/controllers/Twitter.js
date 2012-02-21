/*
app.controllers.twitter = new Ext.Controller({

  getTweets: function() {
    // Display a loading spinner
    mask.show();

    $fh.act({act: 'getTweets', req:{}}, function(res) { 
      alert(JSON.stringify(res));
      
      var tweets = JSON.parse(res.body);

      if (typeof tweets !== "undefined") {
        app.stores.twitter.loadData(tweets.results);
      } 

      // Hide the loading the spinner
      mask.hide();
    }); 
  }

});
*/