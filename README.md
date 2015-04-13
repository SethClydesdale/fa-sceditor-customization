# FA SCEditor Customization
The aim of this project is to give users greater control over the customization of the SCEdtior on their Forumactif forums by providing them with an extensive set of options which is not given via the Administration Panel.


## Installation
To install this modification on your forum. ( **Must be hosted by Forumactif, Forumotion, etc..** ) Go to Administration Panel > Modules > JavaScript codes management and create a new script.

**Title :** FA SCEditor Customization

**Placement :** In all the pages

Paste the code provided [here](https://raw.githubusercontent.com/SethClydesdale/fa-sceditor-customization/master/fa-sceditor-options.js) and click save.


### Config

The configuration is the first set of options which allows you to change some base settings, such as ; height, colors, fonts, etc... It looks like this :
```javascript
var config = {
  height : 0,
  autoFocus : 0,
  resizable : 1,
  themeSelector : 1,
  fonts : '',
  colors : ''
},
```

**height** : The height allows you to set the default height of the editor. By default it's set to 0 which disables the option, and value higher than 0 is what the default height of the editor will be.

**autoFocus** : Determines if the editor will be automatically focused when you go to a page the editor is displayed on.

**resizable** : Toggles on / off the grip for resizing the editor.

**themeSelector** : Toggles on / off the drop down for switching the editor theme.

**fonts** : This option will let you define a list of fonts that will be used in the editor font drop down. It uses a string value, all you need to do is write the name of the font. For example, this is the default font list :

```javascript
fonts : 'Arial,Arial Black,Comic Sans MS,Courier New,Georgia,Impact,Sans-serif,Serif,Times New Roman,Trebuchet MS,Verdana',
```

Each font should be separated by a comma **without** spaces. Leaving it as an empty string will force use of the default font set.

**colors** : This option will let you define your own color palette. It also uses a string value, so here's a small example of how to use it :

```javascript
colors : '#000000, #FF0000, #00FF00|#000000, #0000FF, #FF00FF, #00FFFF'
```

Colors can be entered in hex and multiple colors **should** be separated by a comma. To start a new column of colors, simply add a vertical bar : **|**. Much like the fonts, leaving this as an empty string will use whatever palette you were using by default.


### Themes

Themes gives you the ability to change the style of the SCEditor by using an external CSS stylesheet. Much like the example in the SCEditor example. I've only included a few themes from the SCEditor documents which I've modified to work with the FA SCEditor. Please note that the server I host them on may have some downtime, so there's the possibility that a theme wont display. Anyway, let's get on with the explanation.

The themes object is simple, it consists of name:source pairs. That is the name of the theme and the link to its stylesheet. It looks like this :
```javascript
themes = {
  'Default' : 'http://illiweb.com/rsc/98/frm/SCEditor/src/themes/fa.default.min.css',
  'Modern' : 'http://opensource.olympe.in/fa/sceditor/minified/themes/modern.min.css',
  'Square' : 'http://opensource.olympe.in/fa/sceditor/minified/themes/square.min.css',
  'Office' : 'http://opensource.olympe.in/fa/sceditor/minified/themes/office-toolbar.min.css'
},
```


### Button options

This is where you'll have the ability to chose what and where the buttons display. This is an example from a group :
```javascript
group_1 : {
  'bold' : { on : 1, quick : 1, full : 1 },
  'italic' : { on : 1, quick : 1, full : 1 },
  'underline' : { on : 1, quick : 1, full : 1 },
  'strike' : { on : 1, quick : 1, full : 1 }
},
```

To the left is the name of the button, and to the right is the display settings for this button. Let's go over the display settings :

**on** : Toggles the button on / off

**quick** : Choose if the button displays in the quick reply editor or not

**full** : Choose if the button displays in the full editor or not

It's simple to modify. You should know that 1 = on and 0 = off.. ( A majhority of options are boolean ) Also know that you can move around the buttons to place them in different groups, just make sure to watch the placement of your commas to avoid errors.
