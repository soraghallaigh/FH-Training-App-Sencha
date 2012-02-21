app.views.TabPanel = Ext.extend(Ext.TabPanel, {
  fullscreen: true,
  layout: 'fit',

  tabBar: {
    dock: 'bottom',
    layout: {
      pack: 'center'
    },
    hidden: true
  },  

  initComponent: function() {
    // Put instances of cards into viewport
    Ext.apply(this, {
      items: [
        app.views.home,
        app.views.payment,
        app.views.twitter,
        app.views.map,
        app.views.settings
      ]
    });
    app.views.TabPanel.superclass.initComponent.apply(this, arguments);
  }

});
