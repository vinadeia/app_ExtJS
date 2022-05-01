Ext.define('MyFirstAppExtJS.view.layouts.Accordion',{
    extend:'Ext.panel.Panel',
    alias:'widget.accordion_layout',
    title: 'Accordion Layout',
    scrollable: true,
    requires:[
        'Ext.layout.container.Accordion'
    ],
    layout:{
        type: 'accordion',
        // multi: true,
        collapsible: true
    },
    defaults:{
        border: 1,
        bodyPadding: 20
    },
    items:[
        {
            xtype: 'panel',
            title: 'Multi',
            html: 'Defina como true para permitir que vários itens de acordeão sejam abertos de uma só vez.'

        },{
            xtype: 'panel',
            title: 'HideCollapseTool',
            html: 'True para ocultar os botões de alternância de recolher/expandir dos Painéis contidos,<br>false para exibi-los. Quando definido como verdadeiro, titleCollapse é definido automaticamente como verdadeiro.'
        },{
            xtype: 'panel',
            title: 'Fill',
            html: 'True para ajustar a altura do item ativo para preencher o espaço disponível no contêiner,<br> false para usar a altura atual do item ou altura automática se não for definida explicitamente.'
        },
        {
            xtype: 'panel',
            title: 'Animate',
            html: 'True para abrir e fechar os painéis contidos durante a expansão/recolhimento usando animação, false para abrir e fechar diretamente sem animação.'
        }
    ]

});