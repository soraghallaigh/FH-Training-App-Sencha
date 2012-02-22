// Hide the back buttons
app.hideBack = true;

app.views.Viewport = Ext.extend(Ext.TabPanel, {
    tabBar: {
      dock: 'bottom',
      layout: {
          pack: 'center'
      }
    },
    fullscreen: true,
    ui: 'light',
    cardSwitchAnimation: {
        type: 'slide',
        cover: true
    },
    
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
          twitter:  new app.views.Twitter(), 
          settings: new app.views.Settings(),
          map:      new app.views.MapView(),
          payment:  new app.views.Payment(),
          camera:   new app.views.Camera()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
          items: [
            app.views.twitter,
            app.views.map,      
            app.views.payment,
            {
              title: 'Camera',
              iconCls: 'home',
              layout: 'fit',

              listeners: {
                beforeshow: function() {
                  Ext.dispatch({
                    controller: app.controllers.camera,
                    action: 'openCamera'
                  });
                }
              }
            },
            app.views.settings,
          ]
        });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
        app.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});

// Loading Spinner
var mask = new Ext.LoadMask(Ext.getBody(), {
  msg: "Loading Data"
});