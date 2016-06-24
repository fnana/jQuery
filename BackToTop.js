/**
 *  @name plugin
 *  @description description
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    publicMethod
 *    destroy
 */


;(function($, window, undefined) {
  'use strict';

  var pluginName = 'backtotop';

  var DISTANCE = 200;

  function Plugin(element, options) {
    this.element = $(element);

    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);

    this.init();

  }

  Plugin.prototype.init = function() {
    var that = this;
    

    //event
    this.element.on('click', function(evt) {
      that.scrollToTop();
    });

    $(document).on('scroll', function(evt) {
      console.log();
      if ($(window).scrollTop() < that.options.distance) {
        that.element.hide();
      } else {
        that.element.show();
      }
    });
  }

  Plugin.prototype.scrollToTop = function() {
    $(document.body).animate({scrollTop: 0}, this.options.time);
  };

  $.fn[pluginName] = function(options, params) {

    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };


  $.fn[pluginName].defaults = {
    distance: 500,
    time: 1000,
  };

  
  //var p = new Plugin();

  $('[data-' + pluginName + ']')[pluginName]();

  
}(jQuery, window));
