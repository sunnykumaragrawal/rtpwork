"use strict";

/*-----------------------------------------------
|  Zion Flexslider
-----------------------------------------------*/
$(document).ready(function () {
  var flexslider = $('.flexslider');

  if (flexslider.length) {
    var flexSliderZanim = function flexSliderZanim(slider, target) {
      if ($(slider).find('*[data-zanim-timeline]').length === 0) return;
      $(slider).find('*[data-zanim-timeline]').zanimation(function (animation) {
        return animation.kill();
      });
      $(target).zanimation(function (animation) {
        return animation.play();
      });
    };

    flexslider.each(function (item, value) {
      var $this = $(value);
      $this.flexslider($.extend($this.data('options') || {
        prevText: '<span class="indicator-arrow indicator-arrow-left"></span>',
        nextText: '<span class="indicator-arrow indicator-arrow-right"></span>'
      }, {
        start: function start(slider) {
          flexSliderZanim(slider, slider.find('*[data-zanim-timeline].flex-active-slide'));
        },
        before: function before(slider) {
          flexSliderZanim(slider, slider.find("ul.slides > li:nth-child(" + (slider.getTarget(slider.direction) + 1) + ")")[0]);
        }
      }));
    });
  }
});