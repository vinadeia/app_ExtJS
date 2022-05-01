Ext.define('MyFirstAppExtJS.view.layouts.Anchor',{
    extend:'Ext.panel.Panel',
    alias:'widget.anchor_layout',
    title: 'Anchor Layout',
    cls: 'myShareButton',
    scrollable: true,
    layout:{
        type: 'anchor'
    },
    defaults:{
        margin: 15,
        border: true,
        shadow: true,
        bodyPadding: 10
    },
    items:[
        {
            xtype: 'panel',
            title: 'Panel 1',
            anchor: '90% 30%',
            html: ' O layout <b>Anchor</b> permite a ancoragem de elementos contidos em relação às dimensões do container.</br>'+
            ' Se o container é redimencionado, todos os itens ancorados são automaticamente redimensionados de acordo com suas regras de ancoragem.'+
            ' Ele não possui nenhuma configuração direta.'
        },{
            xtype: 'panel',
            title: 'Panel 2',
            anchor: '60% 20%',
            html: ' Configuração<br><b>anchor:</b> "60% 20%";'
        },{
            xtype: 'panel',
            title: 'Panel 3',
            anchor: '30% 20%',
            html: ' Configuração<br><b>anchor:</b> "30% 20%";'
        }
    ]

});