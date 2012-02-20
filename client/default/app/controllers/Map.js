app.controllers.map = new Ext.Controller({

  markers: [], // Keep track of any map markers

  clearMarkers: function() {
    if (this.markers) {
      for (i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
    }
  },

  getLocation: function(options){
    // Instance of the google map
    var map = Ext.getCmp("map").map;
    var pos = {};

    $fh.geo({
      interval: 0
    }, function(res){
      pos = new google.maps.LatLng(res.lat, res.lon);
      map.setCenter(pos);

      // Remove any previously created markers
      this.clearMarkers();

      // Create a marker
      this.markers.push(new google.maps.Marker({
        position: pos,        
        map: map,
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|FF0000|000000'
      }));  
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