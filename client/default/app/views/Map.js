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
  		mapOptions : {
        zoom: 10,
        //mapTypeId : google.maps.MapTypeId.HYBRID,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControl: false,
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.DEFAULT
        }
      },
  	})
  ]
});