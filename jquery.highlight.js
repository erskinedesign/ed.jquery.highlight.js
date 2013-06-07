/* jshint undef: true, unused: true */
/* global define */
/**
 * A simple jQuery Plugin that implements the yellow fade pattern
 * 
 * @author  Tom Davies - Erskine Design
 * @version  1.0.1
 */
define(["jQuery"], function() {
    (function(window, $) {
        var Highlight = function(el, opts) {
            this.el = el;
            this.$el = $(el);
            this.opts = opts;
            this.init();
        };

        Highlight.prototype = {
            constructor: Highlight,
            init: function() {
                this.show();
            },
            show: function() {
                var $highlight = $("<div/>");

                $highlight.data('originalElement', this.el);

                if ($.isFunction(this.opts.clickCallback)){
                    $highlight.on('click', this.opts.clickCallback);
                }
                $highlight.width(this.$el.outerWidth() + this.opts.padding.h*2);
                $highlight.height(this.$el.outerHeight() + this.opts.padding.v*2);
                $highlight.css({
                    "left": this.$el.offset().left - this.opts.padding.h,
                    "top": this.$el.offset().top - this.opts.padding.v
                });
                $highlight.css(this.opts.css);
                $highlight.appendTo('body');
                $highlight.fadeOut(this.opts.duration);
                $highlight.queue(function (){
                    $(this).unbind().remove();
                });
            }
        };

        $.fn.highlight = function(option) {
            var opts = $.fn.highlight.defaults;
            if (typeof option === 'object') {
                opts = $.extend( {}, opts, option );
            }
            return this.each(function() {
                var $this = $(this),
                data = $this.data('highlight');
                if(!data){
                    $this.data('highlight', data = new Highlight(this, opts));
                }
                else if (typeof option === 'string') {
                    data[option]();
                }
                else {
                    data.show(); //if called again
                }
            });
        };

        $.fn.highlight.defaults = {
            css: {
                "position": "absolute",
                "background-color": "#ffff99",
                "opacity": "0.9",
                "z-index": "9999999"
            },
            duration: 1800,
            padding: {
                v: 5,
                h: 2
            },
            clickCallback: false
        };

    })(window, jQuery);
});