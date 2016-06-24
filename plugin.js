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

  var pluginName = 'popup';

  //var privateVar = null;
  //var privateMethod = function(el, options) {
    // to do
  //};

  function Plugin(element, options) {
    this.element = $(element);

    this.options = $.extend({sex: 'M'}, $.fn[pluginName].defaults, this.element.data(), options);
   
   


  }

  Plugin.prototype.init = function() {

  };



  Plugin.prototype.show = function() {

  };

  Plugin.prototype.hide = function() {

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
    name: 'Cuong',
    age: 32,
    title:  "CULIIT",
    say: function() {}
  };

  
  //var p = new Plugin();

  $('[data-' + pluginName + ']')[pluginName]();

  
}(jQuery, window));
