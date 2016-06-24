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

  var pluginName = 'slot';

  //var privateVar = null;
  //var privateMethod = function(el, options) {
    // to do
  //};

  function Plugin(element, options) {
    this.element = $(element);

    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);

    this.init();

  }

  Plugin.prototype.init = function() {

    this.vars = {
      items: this.element.find('li'),
      currentLoop: 0
    };

    this.play();
  }

  Plugin.prototype.play = function() {


      var that = this;

      var listHeight = this.element.height();

      this.currentLoop ++;

      if (this.currentLoop >= this.options.loop) {
        return;
      }


    this.element.css({
      marginTop: 20
    });

    this.element.animate( {
      marginTop: -listHeight
    }, this.options.time, function() {
      that.play();
    });
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
    loop: 5,
    time: 2000,
    winner: 1
  };

  
  //var p = new Plugin();

  $('[data-' + pluginName + ']')[pluginName]();

  
}(jQuery, window));
