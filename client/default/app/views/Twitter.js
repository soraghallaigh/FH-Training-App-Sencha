app.views.Twitter = Ext.extend(Ext.Panel, {
  title: 'Twitter',
  iconCls: 'home',
  layout: 'fit',

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
  	new Ext.List({
      id: 'list',
      store: app.stores.twitter,
      //itemTpl: '{profile_image_url}{text}',
      itemTpl: '<img style="float: left; margin: 0px 8px 8px 0px;" src="{profile_image_url}" />' + 
               '<strong>{from_user}</strong>' +
               '{text}',
      grouped: false,
      scroll: 'vertical'
  	})
  ]
});