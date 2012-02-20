// http://api.twitter.com/1/statuses/user_timeline/feedhenry.json?callback=?

app.views.Twitter = Ext.extend(Ext.Panel, {
  title: 'Twitter',
  iconCls: 'home',
  
  items: [
  	new Ext.List({
  		id: 'list',
  		store: 'app.stores.twitter',
  		itemTpl: '<b>test</b>'
  	})
  ]
});