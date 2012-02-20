app.views.Home = Ext.extend(Ext.Panel, {
  title: 'Home',
  iconCls: 'home',
  scroll: false,

  listeners: {
  	show: function() {
  		app.views.viewport.tabBar.hide();
  		app.views.viewport.componentLayout.childrenChanged = true;
  		app.views.viewport.doComponentLayout();
  	}
  },

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
  		items: [
  			
  		]
  	}
  ],

  items: [
    {
  		xtype: 'panel',
  		height: 20
  	},

  	/* List View & Google Maps Buttons */
  	new Ext.Panel({
  		height: 100,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		text:  'Map',
		  		width:  100,
		  		height: 100,

		  		handler: function() {
		  			app.views.viewport.setActiveItem( app.views.map );
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		text: 'Map',
		  		width:  100,
		  		height: 100
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	}),

  	{
  		xtype: 'panel',
  		height: 20
  	},

  	/* Camera and Twitter Buttons */
  	new Ext.Panel({
  		height: 100,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		text: 'Map',
		  		width:  100,
		  		height: 100
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		text: 'Map',
		  		width:  100,
		  		height: 100
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	}),

  	{
  		xtype: 'panel',
  		height: 20
  	},

  	/* ??? & Webview Buttons */
  	new Ext.Panel({
  		height: 100,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		text: 'Map',
		  		width:  100,
		  		height: 100
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		text: 'Map',
		  		width:  100,
		  		height: 100
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	})
  ]
});