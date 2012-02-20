app.controllers.map = new Ext.Controller({

  getLocation: function(options){
    // Instance of the google map
    var map = app.views.map.map;

    $fh.geo({
      interval: 0
    }, function(res){
      console.log( 'lon='+res.lon+', lat='+res.lat+', alt='+res.alt+', at='+res.when);

    }, function() {
      // We failed to get the users geolocation, fallback to geo ip
      console.log("$fh.geo failed.");

      $fh.geoip(function(res) { 
        console.log(JSON.stringify(res.geoip)); 
      });
    });
  }

});