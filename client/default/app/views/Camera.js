app.views.Camera = Ext.extend(Ext.Panel, {
  title: 'Camera',
  iconCls: 'home',

  listeners: {
  	show: function() {

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
      tpl: '<img src="{image}" width="100%"/>'
    },
    {
    	xtype: 'button',
    	text: 'Upload Image',
    	handler: function() {
    		Ext.Msg.alert('Upload', 'Upload Button Handler.', Ext.emptyFn);
    	}
    }
  ]
});