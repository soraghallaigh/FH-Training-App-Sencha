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
            app.views.viewport.setActiveItem(app.views.home);
          }
        }
      ]
    },
    {
      dock: 'bottom',
      items: [
        {
          xtype: 'button',
          text: 'Upload Image',
          handler: function() {
            Ext.Msg.alert('Upload', 'Upload Button Handler.', Ext.emptyFn);
          }
        }
      ]
    }
  ],
  
  items: [
    {
      id: 'camera_image',
      tpl: '<img src="{image}" width="100%" height="100%"/>'
    }
  ]
});