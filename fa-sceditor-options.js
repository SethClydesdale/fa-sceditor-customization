// Extended customization for the FA SCEditor
$(function(){
  if (!$.sceditor) return;
  
  // editor options
  // 1 : enabled
  // 0 : disabled
  var config = {
    height : 0,
    autoFocus : 0,
    resizable : 1,
    themeSelector : 1,
    fonts : 'Arial,Arial Black,Comic Sans MS,Courier New,Georgia,Impact,Sans-serif,Serif,Times New Roman,Trebuchet MS,Verdana',
    colors : '#000000, #000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000|#000000, #000000,#333333,#666666,#999999,#CCCCCC,#FFFFFF,#FF0000,#00FF00,#0000FF,#FFFF00,#00FFFF,#FF00FF|#000000, #000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000|#000000, #000000,#000033,#000066,#000099,#0000CC,#0000FF,#990000,#990033,#990066,#990099,#9900CC,#9900FF|#000000, #003300,#003333,#003366,#003399,#0033CC,#0033FF,#993300,#993333,#993366,#993399,#9933CC,#9933FF|#000000, #006600,#006633,#006666,#006699,#0066CC,#0066FF,#996600,#996633,#996666,#996699,#9966CC,#9966FF|#000000, #009900,#009933,#009966,#009999,#0099CC,#0099FF,#999900,#999933,#999966,#999999,#9999CC,#9999FF|#000000, #00CC00,#00CC33,#00CC66,#00CC99,#00CCCC,#00CCFF,#99CC00,#99CC33,#99CC66,#99CC99,#99CCCC,#99CCFF|#000000, #00FF00,#00FF33,#00FF66,#00FF99,#00FFCC,#00FFFF,#99FF00,#99FF33,#99FF66,#99FF99,#99FFCC,#99FFFF|#000000, #330000,#330033,#330066,#330099,#3300CC,#3300FF,#CC0000,#CC0033,#CC0066,#CC0099,#CC00CC,#CC00FF|#000000, #333300,#333333,#333366,#333399,#3333CC,#3333FF,#CC3300,#CC3333,#CC3366,#CC3399,#CC33CC,#CC33FF|#000000, #336600,#336633,#336666,#336699,#3366CC,#3366FF,#CC6600,#CC6633,#CC6666,#CC6699,#CC66CC,#CC66FF|#000000, #339900,#339933,#339966,#339999,#3399CC,#3399FF,#CC9900,#CC9933,#CC9966,#CC9999,#CC99CC,#CC99FF|#000000, #33CC00,#33CC33,#33CC66,#33CC99,#33CCCC,#33CCFF,#CCCC00,#CCCC33,#CCCC66,#CCCC99,#CCCCCC,#CCCCFF|#000000, #33FF00,#33FF33,#33FF66,#33FF99,#33FFCC,#33FFFF,#CCFF00,#CCFF33,#CCFF66,#CCFF99,#CCFFCC,#CCFFFF|#000000, #660000,#660033,#660066,#660099,#6600CC,#6600FF,#FF0000,#FF0033,#FF0066,#FF0099,#FF00CC,#FF00FF|#000000, #663300,#663333,#663366,#663399,#6633CC,#6633FF,#FF3300,#FF3333,#FF3366,#FF3399,#FF33CC,#FF33FF|#000000, #666600,#666633,#666666,#666699,#6666CC,#6666FF,#FF6600,#FF6633,#FF6666,#FF6699,#FF66CC,#FF66FF|#000000, #669900,#669933,#669966,#669999,#6699CC,#6699FF,#FF9900,#FF9933,#FF9966,#FF9999,#FF99CC,#FF99FF|#000000, #66CC00,#66CC33,#66CC66,#66CC99,#66CCCC,#66CCFF,#FFCC00,#FFCC33,#FFCC66,#FFCC99,#FFCCCC,#FFCCFF|#000000, #66FF00,#66FF33,#66FF66,#66FF99,#66FFCC,#66FFFF,#FFFF00,#FFFF33,#FFFF66,#FFFF99,#FFFFCC,#FFFFFF'
  },
  
  // these are the themes available if themeSelector is enabled
  // the sources can be changed and more can be added at anytime
  // THEME_NAME : STYLESHEET
  themes = {
    'Default' : 'http://illiweb.com/rsc/98/frm/SCEditor/src/themes/fa.default.min.css',
    'Modern' : 'http://opensource.olympe.in/fa/sceditor/minified/themes/modern.min.css',
    'Square' : 'http://opensource.olympe.in/fa/sceditor/minified/themes/square.min.css',
    'Office' : 'http://opensource.olympe.in/fa/sceditor/minified/themes/office-toolbar.min.css'
  },
  
  // these are the editor button settings
  // on enables or disables the button
  // quick and full allow you to decided if the button displays in quick reply, the full editor, or both
  options = {
    
    group_1 : {
      'bold' : { on : 1, quick : 1, full : 1 },
      'italic' : { on : 1, quick : 1, full : 1 },
      'underline' : { on : 1, quick : 1, full : 1 },
      'strike' : { on : 1, quick : 1, full : 1 }
    },
    
    group_2 : {
      'left' : { on : 1, quick : 1, full : 1 },
      'center' : { on : 1, quick : 1, full : 1 },
      'right' : { on : 1, quick : 1, full : 1 },
      'justify' : { on : 1, quick : 1, full : 1 }
    },
    
    group_3 : {
      'bulletlist' : { on : 1, quick : 1, full : 1 },
      'orderedlist' : { on : 1, quick : 1, full : 1 },
      'horizontalrule' : { on : 1, quick : 1, full : 1 }
    },
    
    group_4 : {
      'quote' : { on : 1, quick : 1, full : 1 },
      'code' : { on : 1, quick : 1, full : 1 },
      'faspoiler' : { on : 1, quick : 1, full : 1 },
      'fahide' : { on : 1, quick : 1, full : 1 },
      'table' : { on : 1, quick : 1, full : 1 }
    },
    
    group_5 : {
      'servimg' : { on : 1, quick : 1, full : 1 },
      'image' : { on : 1, quick : 1, full : 1 },
      'email' : { on : 1, quick : 1, full : 1 },
      'link' : { on : 1, quick : 1, full : 1 },
      'unlink' : { on : 0, quick : 1, full : 1 }
    },
    
    group_6 : {
      'youtube' : { on : 1, quick : 1, full : 1 },
      'dailymotion' : { on : 1, quick : 1, full : 1 },
      'flash' : { on : 1, quick : 1, full : 1 }
    },
    
    group_7 : {
      'headers' : { on : 1, quick : 1, full : 1 },
      'size' : { on : 1, quick : 1, full : 1 },
      'color' : { on : 1, quick : 1, full : 1 },
      'font' : { on : 1, quick : 1, full : 1 },
      'removeformat' : { on : 0, quick : 1, full : 1 }
    },
    
    group_8 : {
      'more' : { on : 1, quick : 0, full : 1 }
    },
    
    group_9 : {
      'subscript' : { on : 1, quick : 0, full : 1 },
      'superscript' : { on : 1, quick : 0, full : 1 },
      'fawow' : { on : 0, quick : 0, full : 1 },
      'ignore' : { on : 0, quick : 0, full : 1 }
    },
    
    group_10 : {
      'fascroll' : { on : 1, quick : 0, full : 1 },
      'faupdown' : { on : 1, quick : 0, full : 1 },
      'farand' : { on : 1, quick : 0, full : 1 },
      'faroll' : { on : 1, quick : 0, full : 1 }
    },
    
    group_11 : {
      'print' : { on : 0, quick : 1, full : 1 },
      'cut' : { on : 0, quick : 1, full : 1 },
      'copy' : { on : 0, quick : 1, full : 1 },
      'paste' : { on : 0, quick : 1, full : 1 },
      'pastetext' : { on : 0, quick : 1, full : 1 }
    },
    
    group_12 : {
      'ltr' : { on : 0, quick : 1, full : 1 },
      'rtl' : { on : 0, quick : 1, full : 1 }
    },
    
    group_13 : {
      'emoticon' : { on : 1, quick : 1, full : 0 },
      'date' : { on : 1, quick : 1, full : 1 },
      'time' : { on : 1, quick : 1, full : 1 },
      'maximize' : { on : 1, quick : 1, full : 1 },
      'source' : { on : 1, quick : 1, full : 1 }
    }
        
  }, opts = $.sceditor.defaultOptions, textarea = document.getElementById('text_editor_textarea'), qr = document.getElementById('quick_reply'), selected = my_getcookie('fa_sceditor_theme'), bloc, style, switcher, g, l, a, j, o, i, k;
  
  // config options
  // the id helps us find the sceditor much quicker
  opts.id = 'fa_sceditor';
  config.height && (height = config.height);
  config.autoFocus && (opts.autofocus = true);
  config.fonts && (opts.fonts = config.fonts);
  !config.resizable && (opts.resizeEnabled = false);
  if (config.colors) {
    palette = 1; // enables advanced palette
    opts.colors = config.colors;
  }
  
  toolbar = ''; // resets the editor the toolbar
  
  // loops our options groups and forms the toolbar
  for (i in options) {
    a = [], g = 0;
    for (j in options[i]) {
      // if the option is enabled we'll push it to our array and add 1 to g
      if (options[i][j].on) {
        if ((qr && options[i][j].quick) || (!qr && options[i][j].full)) {
          a.push(j);
          g++;
        }
      }
    }
    (g && toolbar.length) && (toolbar += '|'); // checks if there's options before placing the group divider
    for (k = 0, l = a.length; k<l; k++) toolbar += a[k] + ( k < l - 1 ? ',' : '' ); // loops the array to place all options into the toolbar
  }
  
  // theme selector 
  if (config.themeSelector) {
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
  }
  
  // code to be executed once the editor is ready
  $(function() {
    var fa = document.getElementById('fa_toolbar'), base = document.getElementById('fa_sceditor'), bar = $('.sceditor-toolbar', base), sce = $(textarea).sceditor('instance');
    if (/maximize/.test(toolbar) && fa) {
      $('.sceditor-button-maximize', bar).click(function() {
        sce.maximize() && (fa.style.display = 'none');
        !sce.maximize() && (fa.style.display = '');
      });
    }
  });
});
