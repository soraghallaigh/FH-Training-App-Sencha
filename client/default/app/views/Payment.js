app.views.Payment = Ext.extend(Ext.Panel, {
  title: 'Payment',
  iconCls: 'home',
  layout: 'fit',

  listeners: {
    beforeshow: function() {
      app.views.tabPanel.tabBar.show();
      app.views.tabPanel.componentLayout.childrenChanged = true;
      app.views.tabPanel.doComponentLayout();
    },
  },

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
      title: '<img style="margin-top: 5px;" src="app/images/logo.png" />',
  		items: [
  			{
  				text: 'Back',
  				handler: function() {
  					app.views.tabPanel.setActiveItem(app.views.home);
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
          title: 'Payment Info',
          instructions: 'Please enter the payment information above.',
          defaults: {
            labelAlign: 'left',
            labelWidth: '40%'
          },
          items: [
            {
              xtype: 'selectfield',
              id: 'cardtype',
              name: 'cardtype',
              label: 'Card Type',
              options: [{
                text: 'Visa',
                value: 'visa'
              }, {
                text: 'Mastercard',
                value: 'mastercard'
              }]
            },
            {
              xtype: 'textfield',
              id: 'cardnumber',
              name: 'cardnumber',
              label: 'Card Number'
            },
          ]
        },
        {
          xtype: 'button',
          text: 'Process Payment',
          handler: function() {
            Ext.dispatch({
              controller: app.controllers.payment,
              action: 'processPayment'
            });
          }
        }
      ]
    }
  ]
});