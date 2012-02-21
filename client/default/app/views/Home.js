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
  		title: '<img style="margin-top: 5px;" src="app/images/logo.png" />',
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
		  		cls: 'mapIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.tabPanel.setActiveItem( app.views.map );
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'twitterIcon',
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
		  		cls:  'paymentIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.tabPanel.setActiveItem( app.views.payment );
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'cameraIcon',
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
		  		cls: 'webviewIcon',
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
		  		cls: 'settingsIcon',
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
  	}),
  ]
});