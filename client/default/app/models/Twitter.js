app.models.Twitter = Ext.regModel('app.models.Twitter', {
  fields: ['id', 'text', 'profile_image_url']
});

app.stores.twitter = new Ext.data.JsonStore({
  model: 'app.models.Twitter',
  
  getGroupString: function(record){
    return record.get('id')[0];
  }
});