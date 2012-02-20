// http://api.twitter.com/1/statuses/user_timeline/feedhenry.json?callback=?

app.views.Twitter = Ext.extend(Ext.Panel, {
  title: 'Twitter',
  iconCls: 'home',

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
  	new Ext.List({
  		id: 'list',
  		store: 'app.stores.twitter',
  		itemTpl: '<b>test</b>'
  	})
  ]
});