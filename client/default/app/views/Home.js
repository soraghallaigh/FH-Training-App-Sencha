app.views.Home = Ext.extend(Ext.Panel, {
  title: 'Home',
  iconCls: 'home',

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
  		title: '<img class="logo" src="app/images/logo.png" />',
  	}
  ],

  items: [
    {
  		xtype: 'panel',
  		height: 20
  	},

  	/* 
  	 * Google Maps & Twitter Buttons
  	 */
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