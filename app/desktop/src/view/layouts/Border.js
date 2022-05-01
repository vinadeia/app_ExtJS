Ext.define('MyFirstAppExtJS.view.layouts.Border',{
    extend:'Ext.panel.Panel',
    alias:'widget.border_layout',
    title: 'Border Layout',
    scrollable: true,
    requires:[
        'Ext.layout.container.Border'
    ],
    layout:{
        type: 'border'
    },
    defaults:{
        border: 1,
        margin: 5,
        collapsible: true,
        bodyPadding: 20
    },
    items:[
        {
            xtype: 'panel',
            title: 'Panel Center',
            region: 'center',
            html: 'Na estrutura do Panel Border é possível "aninhar" outros paineis ao seu redor. </br> Esses paineis devem conter a largura ou altura definidos,</br> dessa forma o painel central vai se ajustar com o espaço restante.'

        },{
            xtype: 'panel',
            title: 'Left Panel',
            region: 'west',
            width: 300
        },{
            xtype: 'panel',
            title: 'Right Panel',
            region: 'east',
            width: 300,
        },
        {
            xtype: 'panel',
            title: 'Top Panel',
            region: 'north',
            height: 250,
        },{
            xtype: 'panel',
            title: 'Bottom Panel',
            region: 'south',
            height: 250,
        }
    ]

});