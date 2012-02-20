app.views.Camera = Ext.extend(Ext.Panel, {
  title: 'Video',
  iconCls: 'home',
  layout: 'fit',

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
    {
    	id: 'camera_image',
      tpl: '<img src="{image}" width="100%" height="100%"/>'
    }
  ]
});