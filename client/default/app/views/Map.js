app.views.MapView = Ext.extend(Ext.Panel, {
  title: 'Map',
  iconCls: 'home',

  listeners: {
  	show: function() {
  		app.views.viewport.tabBar.show();
  		app.views.viewport.componentLayout.childrenChanged = true;
  		app.views.viewport.doComponentLayout();
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
  	new Ext.Map({
      title: 'Map',
      mapOptions: {
        zoom: 15,
        center: new google.maps.LatLng(52.262852,-7.115364),
      },
    })
  ]
});