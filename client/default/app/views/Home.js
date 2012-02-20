app.views.Home = Ext.extend(Ext.Panel, {
  title: 'Home',
  iconCls: 'home',

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

  	/* Video & Google Maps Buttons */
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
		  		text:  'Video',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem( app.views.video );
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		text: 'Map',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem( app.views.map );
		  		}
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
		  		text: 'Camera',
		  		width:  100,
		  		height: 100
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		text: 'Twitter',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem( app.views.twitter );
		  		}
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

  	/* Webview & Settings Buttons  */
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
		  		text: 'Webview',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			$fh.webview({
		  				title: 'FeedHenry',
		  				url: 'http://www.feedhenry.com/'
		  			});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},		  	
		  	{
		  		xtype: 'button',
		  		text: 'Settings',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem( app.views.settings );
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	})
  ]
});