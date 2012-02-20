Ext.regApplication({
  name: 'app',
  launch: function() {
    this.views.viewport = new this.views.Viewport();
  }
});

// Loading Spinner
var mask = new Ext.LoadMask(Ext.getBody(), {
  msg: "Loading Data"
});