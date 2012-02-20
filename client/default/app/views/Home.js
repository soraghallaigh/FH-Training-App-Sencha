app.views.Home = Ext.extend(Ext.Panel, {
  title: 'Home',
  iconCls: 'home',

  listeners: {
  	beforeshow: function() {
  		app.views.tabPanel.tabBar.hide();
  		app.views.tabPanel.componentLayout.childrenChanged = true;
  		app.views.tabPanel.doComponentLayout();
  	}
  },

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
  		items: [
  			{
  				xtype: 'panel',
  				title: 'FeedHenry'			
  			}
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
		  			app.views.tabPanel.setActiveItem( app.views.video );
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
		  			app.views.tabPanel.setActiveItem( app.views.map );
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
		  		height: 100,
		  		handler: function() {
		  			Ext.dispatch({
			        controller: app.controllers.camera,
			        action: 'openCamera'
			      });
		  		}
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
		  			app.views.tabPanel.setActiveItem( app.views.twitter );
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
		  			app.views.tabPanel.setActiveItem( app.views.settings );
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	})
  ]
});