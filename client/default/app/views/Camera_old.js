app.views.Camera = Ext.extend(Ext.Panel, {
  title: 'Camera',
  iconCls: 'home',
  layout: 'fit',
  fullscreen: true,

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
  	},
    {
      dock: 'bottom',
      items: [
        {
          xtype: 'button',
          text: 'Upload Image',
          handler: function() {
            Ext.Msg.alert('Upload', 'Upload Button Handler.', Ext.emptyFn);
          }
        }
      ]
    }
  ],
  
  items: [
    {
      html: 'test'
    }
  ]

});