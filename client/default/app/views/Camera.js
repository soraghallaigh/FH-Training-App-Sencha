app.views.Camera = Ext.extend(Ext.Panel, {
  title: 'Camera',
  iconCls: 'home',
  layout: 'fit',

  dockedItems: [
    {
      dock: 'top',
      xtype: 'toolbar',
      items: [
        {
          text: 'Back',
          handler: function() {
            app.views.viewport.setActiveItem(0);
          }
        }
      ]
    }
  ],
  
  items: [
    {
      html: '<b>test</b>'
    }
  ]
});