# FeedHenry Sencha Tutorial - v2

## Overview

In this tutorial we will be creating the home view

* Create a view with a number of UI components.

![](https://github.com/feedhenry/Training-Demo-App/raw/v1/docs/HomeView.png)

## Step 1

The first step is to create two new files. 

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
