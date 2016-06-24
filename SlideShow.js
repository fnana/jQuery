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

  var pluginName = 'slideshow';

  function Plugin(element, options) {
    this.element = $(element);

    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);

    this.init();

  }

  Plugin.prototype.init = function() {
    var that = this;

    this.vars = {
      nextBtn: this.element.find('.next'),
      backBtn: this.element.find('.back'),
      items: this.element.find('.item'),
      thumbnails: this.element.find('.thumbnail'),
      currentIndex: 0
    };

    //event
    this.vars.nextBtn.on('click', function(evt) {
      that.next();
    });

    this.vars.backBtn.on('click', function(evt) {
      that.back();
    });

    var item;
    for (var i = 0; i < this.vars.thumbnails.length; i ++) {
      item =  this.vars.thumbnails[i];
      item.data('index', i);

      $(item).on('click', function(evt) {
        that.slideTo(this.data('index'));
      });
    };
  }

  Plugin.prototype.next = function() {
    var  index = this.currentIndex + 1;
    this.slideTo(index);
  };

  Plugin.prototype.back = function() {
    var  index = this.currentIndex - 1;
    this.slideTo(index);
  };

  Plugin.prototype.slideTo = function(slideIndex) {

    var left = itemWith * slideIndex;

    this.element.animate({
      marginLeft: left;
    })

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
    time: 500,
    defaultIndex: 2,
    effect: 'fade',
    autoPlay: true,
    loop: true
  };

  
  //var p = new Plugin();

  $('[data-' + pluginName + ']')[pluginName]();

  
}(jQuery, window));
