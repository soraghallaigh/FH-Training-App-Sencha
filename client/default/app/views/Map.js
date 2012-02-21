app.views.map = new Ext.Map({
  fullscreen: true,
  layout: 'fit',
  id: 'map',
  title: 'Map',
  mapOptions: {
    zoom: 11,
  }
});

app.views.MapView = Ext.extend(Ext.Panel, {
  fullscreen: true,
  title: 'Map',
  iconCls: 'home',
  layout: 'fit',

  listeners: {
  	show: function() {
      // Get the users location
      Ext.dispatch({
        controller: app.controllers.map,
        action: 'getLocation'
      });
  	}
  },

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
      title: '<img style="margin-top: 5px;" src="app/images/logo.png" />',
  		items: [
  			{
  				text: 'Back',
          hidden: app.hideBack || false,
  				handler: function() {
  					app.views.viewport.setActiveItem(app.views.home);
  				}
  			}
  		]
  	}
  ],
  
  items: [
  	app.views.map
  ]
});