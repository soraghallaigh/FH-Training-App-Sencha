// http://api.twitter.com/1/statuses/user_timeline/feedhenry.json?callback=?

app.views.ListView = Ext.extend(Ext.Panel, {
  title: 'List',
  iconCls: 'home',
  
  items: [
  	new Ext.List({
  		id: 'list',
  		store: 'twitterStore',
  		itemTpl: '<b>test</b>'
  	})
  ]
});