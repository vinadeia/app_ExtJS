Ext.define('MyFirstAppExtJS.view.layouts.Form',{
    extend:'Ext.panel.Panel',
    alias:'widget.form_layout',
    title: 'Form Layout',
    scrollable: true,
    layout:{
        type: 'form'
    },
    defaults:{
        margin: 10,
        labelAlign: 'left'
    },
    items:[
            {
                xtype: 'textfield',
                fieldLabel: 'Nome'
            },{
                xtype: 'datefield',
                fieldLabel: 'Nascimento'
            },{
                xtype: 'combobox',
                fieldLabel: 'Sexo',
                valueField: 'description',
                displayField: 'description',
                queryMode: 'local',
                store: {
                    fields: ['description'],
                    data: [{
                        description: 'Masculino',
                    },{
                        description: 'Feminino',
                    }]
                }
            },{
                xtype: 'textfield',
                fieldLabel: 'Text area',
                height: 90
            }
        ]

});