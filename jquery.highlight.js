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
                $("<div/>").width(this.$el.outerWidth() + this.opts.padding.h*2)
                        .height(this.$el.outerHeight() + this.opts.padding.v*2)
                        .css(
                            {
                                "position": "absolute",
                                "left": this.$el.offset().left - this.opts.padding.h,
                                "top": this.$el.offset().top - this.opts.padding.v,
                                "background-color": this.opts.backgroundColor,
                                "opacity": this.opts.opacity,
                                "z-index": "9999999"
                            }
                        )
                        .appendTo('body')
                        .fadeOut(this.opts.duration)
                        .queue(function (){
                            $(this).remove();
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
                if (typeof option === 'string') {
                    data[option]();
                }
            });
        };

        $.fn.highlight.defaults = {
            backgroundColor: "#ffff99",
            opacity: "0.9",
            duration: 1800,
            padding: {
                v: 5,
                h: 2
            }
        };

    })(window, jQuery);
});