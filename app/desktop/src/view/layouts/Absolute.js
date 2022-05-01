Ext.define('MyFirstAppExtJS.view.layouts.Absolute',{
    extend:'Ext.panel.Panel',
    alias:'widget.absolute_layout',
    title: 'Absolute Layout',
    scrollable: true,
    layout:{
        type: 'absolute'
    },
    defaults:{
        margin: 15,
        border: 1,
        shadow: true,
        height: 200,
        bodyPadding: 20
    },
    items:[
        {
            xtype: 'panel',
            title: 'Panel 1',
            x: 100,
            y: 50,
            html: ' O layout <b>Absolute</b> herda do layout Anchor o mesmo sistema redimencionamento</br> e adiciona a capacidade de posicionamento no container pelos eixos <b> x / y</b> como configuração de componentes filhos.</br>'
        },{
            xtype: 'panel',
            title: 'Panel 2',
            x: 200,
            y: 300,
            html: 'Os paineis podem se sobrepor caso tenham as mesmas coordenadas.'
        },{
            xtype: 'panel',
            title: 'Panel 3',
            x: 300,
            y: 550,
        }
    ]

});