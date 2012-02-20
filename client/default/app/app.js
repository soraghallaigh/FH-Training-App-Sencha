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

