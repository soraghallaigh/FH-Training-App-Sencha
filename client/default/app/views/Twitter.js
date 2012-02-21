app.views.Twitter = Ext.extend(Ext.Panel, {
  title: 'Twitter',
  iconCls: 'time',
  width: '100%',
  layout: {
    type: 'vbox'
  },

  listeners: {
  	show: function() {

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
            app.views.tabPanel.setActiveItem(app.views.home);
          }
        }
      ]
    }
  ],
  
  items: [
    {
      xtype: 'list',
      width: '100%',
      store: app.stores.twitter,
      itemTpl: '<img style="float: left; margin: 0px 8px 8px 0px;" src="{profile_image_url}" />' + 
      '<strong>{from_user}</strong>' +
      '{text}',
      flex: 1,
      plugins: [{
        ptype: 'pullrefresh'
      }]
    }
  ]
});