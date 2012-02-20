app.views.map = new Ext.Map({
  id: 'map',
  title: 'Map',
  mapOptions: {
    zoom: 15,
    center: new google.maps.LatLng(52.262852,-7.115364),
  },
});

app.views.MapView = Ext.extend(Ext.Panel, {
  title: 'Map',
  iconCls: 'home',
  layout: 'fit',

  listeners: {
  	show: function() {
      // Update UI
  		app.views.viewport.tabBar.show();
  		app.views.viewport.componentLayout.childrenChanged = true;
  		app.views.viewport.doComponentLayout();

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
  		items: [
  			{
  				text: 'Back',
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