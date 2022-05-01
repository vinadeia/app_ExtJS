Ext.define('MyFirstAppExtJS.view.layouts.Card',{
    extend:'Ext.panel.Panel',
    alias:'widget.card_layout',
    title: 'Card Layout',
    scrollable: true,
    layout:{
        type: 'card'
    },
    defaults:{
        margin: 10
    },
    items:[
        {
            xtype: 'container',
            html: '<h1>Seja Bem vindo ao nosso assistente</h1>'
        },{
            xtype: 'form',
            layout: 'form',
            title: 'Preencha seus dados.',
            items:[
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nome'
                },{
                    xtype: 'textfield',
                    fieldLabel: 'Email'
                },{
                    xtype: 'textfield',
                    fieldLabel: 'Telefone'
                }
            ]
        },{
            xtype: 'container',
            html: '<h1>Chegamos ao final. =)</h1>'
        }
    ],
    bbar:{
        items:[
            {
                xtype: 'button',
                text: 'Anterior',
                handler: function(button){
                    var layout= button.up('card_layout').getLayout();
                    if(layout.getPrev()){
                        layout.prev();
                    }
                }
            },{
                xtype: 'button',
                text: 'Próximo',
                handler: function(button){
                    var layout= button.up('card_layout').getLayout();
                    if(layout.getNext()){
                        layout.next();
                    }
                }
            }
        ]
    }

});