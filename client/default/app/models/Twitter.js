app.models.Twitter = Ext.regModel('app.models.Twitter', {
  fields: ['name', 'data']
});

app.stores.twitter = new Ext.data.Store({
  model: 'app.models.Twitter',
  autoLoad:true,
  proxy: {
    type: 'ajax',
    url : 'http://api.twitter.com/1/statuses/user_timeline/feedhenry.json?callback=?',
    reader: {
      type: 'json',
      root: ''
    }
  },
  getGroupString: function(record){
    return record.get('name')[0];
  }
});