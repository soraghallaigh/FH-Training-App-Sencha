app.views.Home = Ext.extend(Ext.Panel, {
  title: 'Home',

  // IconCls is used to set a CSS class that applies an image to be used as an icon.
  // This will only be used if we setup a tabBar
  iconCls: 'home',

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
  		title: '<img class="logo" src="app/images/logo.png" />',
  	}
  ],

  items: [
    // This a blank panel to act as padding
    {
  		xtype: 'panel',
  		height: 20
  	},

  	/* 
  	 * Google Maps & Twitter Buttons
  	 */
  	new Ext.Panel({
  		height: 100,

  		/*
  		 * Layout specifies how items should be arranged.
  		 * hbox arranges items horizontally across their container
  		 * spacers are used below to layout the icons neatly with padding
  		 */
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
		  			
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	}),

  ]
});