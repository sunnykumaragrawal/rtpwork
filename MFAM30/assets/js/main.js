!(function($) {
  "use strict";

  $("[title]").tooltip({
    delay: { "show": 500, "hide": 10 },
    offset: '0 10',
    boundary: 'window',
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });

})(jQuery);