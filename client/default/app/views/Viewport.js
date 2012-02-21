// Hide the back buttons
app.hideBack = true;

app.views.Viewport = Ext.extend(Ext.TabPanel, {
  fullscreen: true,
  ui: 'light',
  layout: 'fit',

  cardSwitchAnimation: {
    type: 'slide',
    cover: true
  },

  tabBar: new Ext.TabBar({
    dock: 'bottom',
    layout: {
        pack: 'center'
    }
  }),

  initComponent: function() {
    

    // Put instances of cards into app.views namespace
    Ext.apply(app.views, {
      map:      new app.views.MapView({hideBack: true}),
      twitter:  new app.views.Twitter({hideBack: true}),        
      payment:  new app.views.Payment({hideBack: true}),
      settings: new app.views.Settings({hideBack: true}),
      camera:   new app.views.Camera({hideBack: true})
    });

    Ext.apply(this, {
      items: [
        app.views.map,
        app.views.twitter,
        app.views.payment,
        app.views.settings,
        /*
        {
          title: 'Webview',
          iconCls: 'home',
          handler: function() {
            $fh.webview({
              title: 'FeedHenry',
              url: 'http://www.feedhenry.com/'
            });
          }
        }
        */
      ]
    });
    app.views.Viewport.superclass.initComponent.apply(this, arguments);
  }
});

// Loading Spinner
var mask = new Ext.LoadMask(Ext.getBody(), {
  msg: "Loading Data"
});
