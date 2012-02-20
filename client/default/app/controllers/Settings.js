app.controllers.settings = new Ext.Controller({

  updateSettings: function() {
    var settings = {
      title:    Ext.getCmp('title').getValue(),
      fullname: Ext.getCmp('name').getValue(),
      toggle:   Ext.getCmp('toggle').getValue()
    };

    // Save to local storage
    $fh.data({
      act: 'save',
      key: 'settings',
      val: JSON.stringify(settings)
    });
    Ext.Msg.alert('Success', 'Your settings have been saved.', Ext.emptyFn);
  }

});