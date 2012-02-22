# FeedHenry Sencha Tutorial - v2

## Overview

In this tutorial we will be creating the home view

* Create a view with a number of UI components.

![](https://github.com/feedhenry/Training-Demo-App/raw/v1/docs/HomeView.png)

## Step 1

In the css directory add a file called 'home.css'. This file will override the Sencha Touch styles that are applied.

	.mapIcon {
	  width: 100px !important;
	  width: 100px !important;
	  background-color: transparent !important;
	  border: none !important;
	  background-size: 100% 100%;
	  background-image: url("../images/icons/maps_icon.png") !important;
	}
	.mapIcon:active, .mapIcon:hover {
		opacity: 0.5;
	}

## Step 2

In the views directory create a view called 'Home.js' with the following code;

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

## Step 3

Updated the index.html page to add references to the css and javascript files we created.

	<link rel="stylesheet" type="text/css" href="app/css/home.css" />

and

	<script type="text/javascript" src="app/views/Home.js"></script>

![](https://github.com/feedhenry/Training-Demo-App/blob/v2/docs/HomeView.png?raw=true)

## Extra Task

Try and add some extra icons to the home screen, some sample images are provided in the images/icons directory.

