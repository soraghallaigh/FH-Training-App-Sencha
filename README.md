# FeedHenry Sencha Tutorial - v1

## Overview

In this tutorial we will be creating the basic structure of the app. At the end of this tutorial you will know how to;

* Initialize the Sencha touch library   (app/app.js)
* Create a viewport                     (app/views/Viewport.js)
* Create a view with some UI components (app/views/Home.js)

## Step 1

First we need to initialize the Sencha Touch framework. This code registers the 'app' namespace and also creates an instance of the viewport. This is done by adding the following code to app.js;

	Ext.regApplication({
	  name: 'app',
	  launch: function() {
	    this.views.viewport = new this.views.Viewport();
	  }
	});

This code registers the 'app' namespace and also creates an instance of the viewport (app.views.viewport)

[[Example Code]]
this.views.viewport = new this.views.Viewport();

We add any views we create to the instance of the viewport. The first view we create is the 'Home' view, this view contains a number of buttons which (In later versions) will go to different views.

The 'Home' view is made up on a number of Ext.Panel objects (http://docs.sencha.com/touch/1-1/#!/api/Ext.Panel). A panel is essentially a container that is used to hold UI components. The diagram below shows the layout of the panel for the 'Home' view.

Panel
{
	[Spacer] [Button] [Spacer] [Button] [Spacer]
	[Panel (Height 20px)]
	[Spacer] [Button] [Spacer] [Button] [Spacer]
}

# Extra Task

The current version of the home view contains four buttons, add another two buttons to the view.