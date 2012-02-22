app.views.Camera = Ext.extend(Ext.Panel, {
  title: 'Camera',
  iconCls: 'home',
  layout: 'card',

  listeners: {
    show: function() {
      app.views.camera.setActiveItem(0);
    }
  },

  dockedItems: [
    {
      dock: 'top',
      xtype: 'toolbar',
      title: '<img style="margin-top: 5px;" src="app/images/logo.png" />',
      items: [
        {
          text: 'Back',
          hidden: app.hideBack || false,
          handler: function() {
            app.views.viewport.setActiveItem(0);
          }
        }
      ]
    },
    
  ],
  
  items: [
    new Ext.Panel({
      items: [
        new Ext.Panel({
          layout: {
            type: 'hbox',
            pack: 'center',  
          },
          items: [
            {
              html: '<img src="app/images/icons/camera_icon.png"/>'
            }
          ]
        }),
        {
          height: 20
        },
        {
          xtype: 'button',
          text:  'Take Photo',
          handler: function() {
            Ext.dispatch({
              controller: app.controllers.camera,
              action: 'openCamera'
            });
          }
        }
      ]
    }),
    new Ext.Panel({

      dockedItems: [
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
    })
  ]
});