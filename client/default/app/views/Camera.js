app.views.Camera = Ext.extend(Ext.Panel, {
  title: 'Camera',
  iconCls: 'home',
  layout: 'fit',

  dockedItems: [
    {
      dock: 'top',
      xtype: 'toolbar',
      title: '<img style="margin-top: 5px;" src="app/images/logo.png" />',
      items: [
        {
          text: 'Back',
          handler: function() {
            app.views.viewport.setActiveItem(0);
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