"use strict";

/*-----------------------------------------------
|   YTPlayer
-----------------------------------------------*/
$(document).ready(function () {
  var Selector = {
    BG_YOUTUBE: '.bg-youtube',
    BG_HOLDER: '.bg-holder'
  };
  var DATA_KEY = {
    PROPERTY: 'property'
  };
  var $youtubeBackground = $(Selector.BG_YOUTUBE);

  if ($youtubeBackground.length) {
    $youtubeBackground.each(function (index, value) {
      var $this = $(value);
      $this.data(DATA_KEY.PROPERTY, $.extend($this.data(DATA_KEY.PROPERTY), {
        showControls: false,
        loop: true,
        autoPlay: true,
        mute: true,
        containment: $this.parent(Selector.BG_HOLDER)
      }));
      $this.YTPlayer();
    });
  }
});