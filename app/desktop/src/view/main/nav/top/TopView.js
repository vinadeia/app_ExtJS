Ext.define('MyFirstAppExtJS.view.main.nav.top.TopView', {
  extend: 'Ext.container.Container',
  xtype: 'topview',
  cls: 'topview',
  items: [
    {
      xtype: 'component', 
      data: { src:'resources/desktop/Alice.jpeg', caption:'Adriana Vinadé', imgStyle: 'imgBig', height: '150px' },
      reference: 'topPic',
      id: 'topPic',
      tpl: new Ext.XTemplate(`
        <div style="height:{height};text-align:center;line-height:20px; font-size: 18px; padding:15px 5px 15px 5px;">
          <div class="imgAll {imgStyle}" style="background-image: url({src});"></div>
          <br><span >{caption}</span>
        </div>
      `)
    }
  ]
});
