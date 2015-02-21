scrollUP
========

Just a very simply scrollUP jQuery Plugin.
You simply assign it to any object, which is freely positionable, you want.

Usage
-----
You might assign the plugin to any object you want to. 
$('.css-element').scrollUP();
-> the plugin repositions the element 
-> .. and attaches the bindings for fadeIn/fadeOut and ScrollUp 

Preferably a small box is used as scrollUp-Item. You might refer to the demo project-file for a simple implementation.

Options
-------
There are two options:
RightPos  | Integer | DEFAULT 10 | defines the padding to the right border
BottomPos | Integer | DEFAULT 10 | defines the padding to the bottom border

Example:
$('.css-element').scrollUP({
	RightPos: 10,
	BottomPos: 10
});

License
-------
jQuery scrollUP uses the Apache 2.0 License