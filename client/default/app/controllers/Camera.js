app.controllers.camera = new Ext.Controller({

  openCamera: function() {
    $fh.cam({
      act: 'picture',
      uri: true
    }, function (res) {
      if (res.uri) {
        var pathToImage = res.uri;

        // Change the view
        app.views.viewport.setActiveItem(app.views.camera);
        
        // Update the view
        Ext.getCmp("camera_image").update({
          image: pathToImage
        });
      }
    })
  }

});