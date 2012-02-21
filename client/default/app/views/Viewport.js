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
      //map:      new app.views.MapView(),
      twitter:  new app.views.Twitter(),        
      video:    new app.views.Video(),
      settings: new app.views.Settings(),
      camera:   new app.views.Camera()
    });
    Ext.apply(app.views, {
      tabPanel: new app.views.TabPanel()
    });
    Ext.apply(this, {
      items: [
        app.views.tabPanel,
        app.views.camera
      ]
    });
    app.views.Viewport.superclass.initComponent.apply(this, arguments);
  }

});
