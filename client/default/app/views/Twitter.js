app.views.Twitter = Ext.extend(Ext.Panel, {
  title: 'Twitter',
  iconCls: 'home',
  layout: 'fit',

  listeners: {
  	show: function() {
  		app.views.tabPanel.tabBar.show();
      app.views.tabPanel.componentLayout.childrenChanged = true;
      app.views.tabPanel.doComponentLayout();

  		// Get a list of tweets
      Ext.dispatch({
        controller: app.controllers.twitter,
        action: 'getTweets'
      });
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