app.views.Viewport = Ext.extend(Ext.TabPanel, {
  fullscreen: true,
  ui: 'light',

  tabBar: {
    dock: 'bottom',
    layout: {
      pack: 'center'
    }
  },
  
  cardSwitchAnimation: {
    type: 'slide',
    cover: true
  },
  
  initComponent: function() {
    Ext.apply(this, {
      items: [
        {
          title: 'Page 1',
          iconCls: 'home',
          html: 'Page #1'
        },
        {
          title: 'Page 2',
          iconCls: 'settings',
          html: 'Page #2'
        }
      ]
    });
    app.views.Viewport.superclass.initComponent.apply(this, arguments);
  },
  layoutOrientation : function(orientation, w, h) {
    app.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
  }
});