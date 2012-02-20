app.views.Video = Ext.extend(Ext.Panel, {
  title: 'Video',
  iconCls: 'home',
  layout: 'fit',

  listeners: {
    beforeshow: function() {
      app.views.tabPanel.tabBar.show();
      app.views.tabPanel.componentLayout.childrenChanged = true;
      app.views.tabPanel.doComponentLayout();
    },
    /*
  	show: function() {
  		app.views.tabPanel.tabBar.show();
      app.views.tabPanel.componentLayout.childrenChanged = true;
      app.views.tabPanel.doComponentLayout();
  	}
    */
  },

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
  		items: [
  			{
  				text: 'Back',
  				handler: function() {
  					app.views.tabPanel.setActiveItem(app.views.home);
  				}
  			}
  		]
  	}
  ],
  
  items: [
    {
      html: 'Video Page'
    }
  ]
});