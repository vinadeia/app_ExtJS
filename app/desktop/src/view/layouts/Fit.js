Ext.define('MyFirstAppExtJS.view.layouts.Fit',{
    extend:'Ext.panel.Panel',
    alias:'widget.fit_layout',
    title: 'Fit Layout',
    layout:'fit',
    defaults:{
        margin: 20,
        border: true,
        shadow: true
    },
    items:[
        {
            xtype: 'panel',
            title: 'Panel 1',
            bodyPadding: 25,
            html: '<p>O layout <b>Fit</b> permite conter apenas um item filho que se expande automaticamente para preencher o recipiente do layout.</p>',
            items: {
                xtype: 'image',
                src: '../../../../../resources/desktop/lagartixa.jpg',
                minHeight: 400
            }
        }
    ]

});