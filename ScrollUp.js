/*
 *  Project: scrollUP
 *  Description: a simple scrollUp item which can be used with every element.
 *  Author: BlackArray[] - Stefan Jud
 *  License: Apache v2
 */

;(function ($, window, document, undefined) {

    var 
        pluginName = "scrollUP",
        dataKey = "plugin_" + pluginName;	

    var Plugin = function (element, options) {
        this.element = element;
		this.$element = $(element);
		
        this.options = {
            RightPos: 10,
			BottomPos: 10
        };

        this.init(options);
		console.log("test");

    };

    Plugin.prototype = {
        // initialize options
        init: function (options) {
            $.extend(this.options, options);
			
			//Basic init of the scroll item
			$(this.element).css( "position", "fixed" );
			$(this.element).css("display", "none");
			$(this.element).css( "right", this.options.RightPos );
			$(this.element).css( "bottom", this.options.BottomPos );
        }

    };
	
    $.fn[pluginName] = function (options) {

        var plugin = this.data(dataKey);
		var element = this;
		var $item = $(element)

        // has plugin instantiated ?
        if (plugin instanceof Plugin) {
            // if have options arguments, call plugin.init() again
            if (typeof options !== 'undefined') {
                plugin.init(options);
            }
        } else {
            plugin = new Plugin(this, options);
            this.data(dataKey, plugin);
        }
		
		//watch for click
		this.bind("click.pluginName", function () {
		$("html, body").animate({
                scrollTop: 0
            }, 600);
		});
		
		//watch for scrollposition
		$(window).bind("scroll.pluginName", function (event) {
            if ($(this).scrollTop() > 100) {
                element.fadeIn();
            } else {
                element.fadeOut();
            }
        });
		
        return plugin;
    };

}(jQuery, window, document));