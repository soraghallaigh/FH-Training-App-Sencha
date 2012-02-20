app.controllers.map = new Ext.Controller({

  getLocation: function(options){
    $fh.geo({
      interval: 0
    }, function(res){
      console.log( 'lon='+res.lon+', lat='+res.lat+', alt='+res.alt+', at='+res.when);

    }, function() {
      // We failed to get the users geolocation, fallback to geo ip
      $fh.geoip(function(res) { 
        console.log(JSON.stringify(res.geoip)); 
      });
    });
  }

});