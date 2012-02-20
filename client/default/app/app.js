Ext.regApplication({
    name: 'app',
    launch: function() {
      this.views.viewport = new this.views.Viewport();

      Ext.dispatch({
	      controller: app.controllers.WordBoard,
	      action: 'newGame'
	    });
    }
});

// Loading Spinner
var mask = new Ext.LoadMask(Ext.getBody(), {
  msg: "Loading Data"
});