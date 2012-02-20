app.models.Twitter = Ext.regModel('app.models.Twitter', {
  fields: ['name', 'data']
});

app.stores.twitter = new Ext.data.JsonStore({
  model: 'app.models.Twitter',
  
  getGroupString: function(record){
    return record.get('name')[0];
  }
});