app.controllers.map = new Ext.Controller({

  markers: [], // Keep track of any map markers

  clearMarkers: function() {
    if (this.markers) {
      for (i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
    }
  },

  getPoints: function(map, callback) {
    $fh.act({
      act: 'getPoints',
      req: {}
    }, function(res) {
      if (res) {
        for (var i = 0; i < res.locations.length; i++) {
          var point = res.locations[i];
          var pos   = new google.maps.LatLng(point.lat, point.lon);

          app.controllers.map.markers.push(new google.maps.Marker({
            position: pos,        
            map: map,
            icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|FF0000|000000'
          })); 
        }
      }

      if (typeof callback !== "undefined") {
        callback();
      }
    });
  },

  getLocation: function(options){
    // Instance of the google map
    var map = Ext.getCmp("map").map;
    var pos = {};

    // Show loading spinner
    mask.show();

    $fh.geo({
      interval: 0
    }, function(res){
      pos = new google.maps.LatLng(res.lat, res.lon);
      map.setCenter(pos);

      // Remove any previously created markers
      app.controllers.map.clearMarkers();

      // Create a marker at the current location
      app.controllers.map.markers.push(new google.maps.Marker({
        position: pos,        
        map: map,
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|FF0000|000000'
      }));  

      // Get markers from the cloud
      app.controllers.map.getPoints(map, function() {
        mask.hide()
      });
    }, function() {
      // We failed to get the users geolocation, fallback to geo ip
      alert("$fh.geo failed");
      alert(JSON.stringify(res.geoip));
    });
  }

});