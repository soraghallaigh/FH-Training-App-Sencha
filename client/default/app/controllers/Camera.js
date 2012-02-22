app.controllers.camera = new Ext.Controller({

  openCamera: function() {
    $fh.cam({
      act: 'picture',
      uri: true
    }, function (res) {
      if (res.uri) {
        var pathToImage = res.uri;

        // Change the view
        app.views.camera.setActiveItem(1);
        
        // Update the view
        Ext.getCmp("camera_image").update({
          image: pathToImage
        });
      }
    })
  }

});