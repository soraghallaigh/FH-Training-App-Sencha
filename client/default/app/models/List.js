app.models.List = Ext.regModel('app.models.List', {
  fields: ['name', 'data']
});

app.stores.list = new Ext.data.Store({
  model: 'app.models.List',
  getGroupString: function(record){
    return record.get('name')[0];
  }
});