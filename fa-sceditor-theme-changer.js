// Theme changer for the FA SCEditor
$(function(){
  if (!$.sceditor) return;
  
  // these are the themes available if themeSelector is enabled
  // the sources can be changed and more can be added at anytime
  // THEME_NAME : STYLESHEET
  var themes = {
    'Default' : 'http://illiweb.com/rsc/98/frm/SCEditor/src/themes/fa.default.min.css',
    'Modern' : 'http://opensource.olympe.in/fa/sceditor/minified/themes/modern.min.css',
    'Square' : 'http://opensource.olympe.in/fa/sceditor/minified/themes/square.min.css',
    'Office' : 'http://opensource.olympe.in/fa/sceditor/minified/themes/office-toolbar.min.css'
  },
  
  textarea = document.getElementById('text_editor_textarea'), qr = document.getElementById('quick_reply'), selected = my_getcookie('fa_sceditor_theme'), bloc, style, switcher, l, a, j, o, i, k;
  
  // theme selector 
  // create our stylesheet and container for the theme switcher
  style = document.createElement('LINK'), bloc = document.createElement('DIV');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  bloc.style.textAlign = 'right';
  bloc.style.fontSize = '12px';
  bloc.style.margin = '4px 0';
  bloc.innerHTML = 'Theme : ';
  
  // create our select element which will contain the themes
  // when onchange is triggered we'll change the style source and update the cookie
  switcher = document.createElement('SELECT');
  switcher.onchange = function() {
    style.href = this.value;
    my_setcookie('fa_sceditor_theme', this.value);
  };
    
  // loops our themes object and forms a list of options for our theme switcher
  for (i in themes) {
    o = document.createElement('OPTION');
    o.innerHTML = i;
    o.value = themes[i];
      
    // checks the cookie and adds the selected attribute to the currently selected theme
    if (selected == themes[i]) {
      o.selected = 1;
      style.href = selected;
    }
      
    switcher.appendChild(o);
  }
  
  bloc.appendChild(switcher);
  document.body.appendChild(style);
  textarea.parentNode.appendChild(bloc);
});
