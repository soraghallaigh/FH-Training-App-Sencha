app.controllers.map = new Ext.Controller({

  getLocation: function(options){
    // Instance of the google map
    var map = Ext.getCmp("map").map;
    var pos = {};

    $fh.geo({
      interval: 0
    }, function(res){
      pos = new google.maps.LatLng(res.lat, res.lat);
      map.setCenter(pos);
    }, function() {
      // We failed to get the users geolocation, fallback to geo ip
      console.log("$fh.geo failed.");

      /*
      $fh.geoip(function(res) { 
        console.log(JSON.stringify(res.geoip)); 
      });
      */
    });
  }

});