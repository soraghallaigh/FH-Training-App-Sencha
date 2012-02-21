app.controllers.payment = new Ext.Controller({

  processPayment: function() {
    var cardType   = Ext.getCmp("cardtype").getValue();
    var cardNumber = Ext.getCmp("cardnumber").getValue();
    
    // Show loading spinner
    mask.show();

    $fh.act({
      act: 'payment',
      req: {
        cardType: cardType,
        cardNumber: cardNumber
      }
    }, function(res) {
      console.log(res);

      var regEx  = new RegExp("<\s*string[^>]*>(.*?)<\s*/\s*string>", "g");
      var result = regEx.exec(res.body)[1];

      // Hide loading spinner
      mask.hide();

      Ext.Msg.alert('Response', result, Ext.emptyFn);
    });
  }

});