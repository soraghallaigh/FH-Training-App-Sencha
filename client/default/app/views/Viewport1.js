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
      home:     new app.views.Home(),
      map:      new app.views.MapView(),
      twitter:  new app.views.Twitter(),        
      payment:  new app.views.Payment(),
      settings: new app.views.Settings(),
      camera:   new app.views.Camera()
    });

    /*
    Ext.apply(app.views, {
      tabPanel: new app.views.TabPanel()
    });
    Ext.apply(this, {
      items: [
        app.views.tabPanel,
        app.views.camera
      ]
    });
    */
    Ext.apply(this, {
      items: [
        app.views.home,
        app.views.map,
        app.views.twitter,
        app.views.payment,
        app.views.settings,
        app.views.camera,
          /*
        {
          xtype: 'panel',
          items: [
            app.views.map,
            app.views.twitter,
            app.views.payment,
            app.views.settings,
            app.views.camera,
          ]
        }*/
      ]
    });
    app.views.Viewport.superclass.initComponent.apply(this, arguments);
  }
});

// Loading Spinner
var mask = new Ext.LoadMask(Ext.getBody(), {
  msg: "Loading Data"
});
