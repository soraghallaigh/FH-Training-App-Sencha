# FeedHenry Sencha Tutorial - v1

## Overview

In this tutorial we will be creating the basic structure of the app. At the end of this tutorial you will know how to;

* Initialize the Sencha touch library   (app/app.js)
* Create a viewport                     (app/views/Viewport.js)
* Create a view with some UI components (app/views/Home.js)

![](https://github.com/feedhenry/Training-Demo-App/raw/v1/docs/HomeView.png)

## Step 1

First we need to initialize the Sencha Touch framework. This code registers the 'app' namespace and also creates an instance of the viewport. This is done by adding the following code to app.js;

	Ext.regApplication({
	  name: 'app',
	  launch: function() {
	    this.views.viewport = new this.views.Viewport();
	  }
	});

## Step 2

Now that the Sencha Touch framework is initialized we can create the viewport. The viewport will contain any views we use in the app.

	app.views.Viewport = Ext.extend(Ext.Panel, {
	  fullscreen: true,
	  ui: 'light',
	  layout: 'card',

	  cardSwitchAnimation: {
	    type: 'slide',
	    cover: true
	  },

	  initComponent: function() {
	    // Put instances of cards into app.views namespace
	    Ext.apply(app.views, {

	    });
	    //put instances of cards into viewport
	    Ext.apply(this, {
	      items: [

	      ]
	    });
	    app.views.Viewport.superclass.initComponent.apply(this, arguments);
	  }
	});

	// Loading Spinner
	var mask = new Ext.LoadMask(Ext.getBody(), {
	  msg: "Loading Data"
	});

We add any views we create to the instance of the viewport. The first view we create is the 'Home' view, this view contains a number of buttons which (In later versions) will go to different views.

## Task - Add a view to the viewport

Inside the ‘initComponent’ function locate the following code;

	//put instances of cards into viewport
	Ext.apply(this, {
	  items: [

	  ]
	});

Inside the items array add the following code;

	{
	  html: 'Test View'
	}

If you open your index.html page you will now see the following;

![](https://github.com/feedhenry/Training-Demo-App/raw/v1/docs/TestView.png)