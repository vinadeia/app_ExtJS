Ext.define('MyFirstAppExtJS.view.layouts.Center',{
    extend:'Ext.panel.Panel',
    requires:[
        'Ext.layout.container.Center'
    ],
    alias:'widget.center_layout',
    title: 'Center Layout',
    layout:'center',
    defaults:{
        margin: 20,
        border: true,
        shadow: true,
    },
    items:[
        {
            xtype: 'panel',
            title: 'Panel Centralizado',
            width: '50%',
            height: '50%',
            bodyPadding: 40,
            html: 'O layout <b>Center</b> tem o comportamento muito parecido com o layout Fit,</br> porém tu consegue especificar a altura e largura do componente filho</br> que vai permanecer sempre centralizado em relação ao componente pai.',
        }
    ]

});