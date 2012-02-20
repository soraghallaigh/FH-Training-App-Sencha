app.views.Settings = Ext.extend(Ext.Panel, {
  title: 'Settings',
  iconCls: 'settings',
  layout: 'fit',

  listeners: {
  	show: function() {
  		app.views.viewport.tabBar.show();
  		app.views.viewport.componentLayout.childrenChanged = true;
  		app.views.viewport.doComponentLayout();
  	}
  },

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
  	}
  ],
  
  items: [
    {
      xtype: 'form',
      items: [
        {
          xtype: 'fieldset',
          title: 'Personal Info',
          instructions: 'Please enter the information above.',
          defaults: {
            labelAlign: 'left',
            labelWidth: '30%'
          },
          items: [
            {
              xtype: 'selectfield',
              name: 'title',
              label: 'Title',
              options: [{
                text: 'Mr',
                value: 'mr'
              }, {
                text: 'Ms',
                value: 'ms'
              }, {
                text: '...',
                value: '...'
              }]
            },
            {
              xtype: 'textfield',
              name:  'name',
              label: 'Name'
            }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'App Config',
          defaults: {
            labelAlign: 'left',
            labelWidth: '30%'
          },
          items: [
            {
              xtype: 'togglefield',
              name: 'enable',
              label: 'Toggle Switch'
            }
          ]
        },
        {
          layout: {
            type: 'hbox',
            pack: 'center',  
          },
          items: [
            {
              xtype: 'button',
              text: 'Save Settings',
              width: '80%',
              handler: function() {
                alert(1);
              }
            }
          ]          
        }
      ]
    },
  ]
});