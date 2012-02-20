app.views.List = Ext.extend(Ext.Panel, {
  title: 'List',
  iconCls: 'user',
  layout: 'card',
  fullscreen: true,

  listeners: {
    show: function() {
      // Hide the tabPanel
    }
  },

  items: [
    {
      html: '<h1>List View</h1>'
    }
  ]
});