app.views.ListView = Ext.extend(Ext.Panel, {
  title: 'List',
  iconCls: 'home',
  
  items: [
  	new Ext.List({
  		id: 'list',
  		store: 'listDataStore',
  		itemTpl: '<b>test</b>'
  	})
  ]
});