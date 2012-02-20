app.models.Twitter = Ext.regModel('app.models.Twitter', {
  fields: ['id', 'text']
});

app.stores.twitter = new Ext.data.JsonStore({
  model: 'app.models.Twitter',
  
  getGroupString: function(record){
    return record.get('id')[0];
  }
});