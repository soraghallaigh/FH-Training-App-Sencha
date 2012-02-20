app.views.Viewport = Ext.extend(Ext.TabPanel, {
    tabBar: {
      dock: 'bottom',
      layout: {
          pack: 'center'
      },
      hidden: true
    },
    fullscreen: true,
    ui: 'light',
    cardSwitchAnimation: {
        type: 'slide',
        cover: true
    },
    defaults: {
        scroll: 'vertical'
    },
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
          home: new app.views.Home(),
          map: new app.views.MapView(),
          list: new app.views.ListView(),
          camera: new app.views.Camera(),
        });
        //put instances of cards into viewport
        Ext.apply(this, {
          items: [
            app.views.home,
            app.views.list,
            app.views.map,
            {
              title: 'Camera',
              iconCls: 'home',
              
              listeners: {
                show: function() {
                  alert('Camera');
                }
              }
            },
            {
              title: 'Twitter',
              iconCls: 'home',
              
              listeners: {
                show: function() {
                  
                }
              }
            },
            {
              title: '???',
              iconCls: 'home',
              
              listeners: {
                show: function() {
                  
                }
              }
            }
          ]
        });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
      app.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});
