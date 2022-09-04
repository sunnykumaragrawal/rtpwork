/* eslint-disable */
'use strict';

import utils from './Utils';


////////////////////////////////////////
//
// Colors
//
////////////////////////////////////////
utils.$document.ready(() => {
  if ($('.palette').length) {
    $(".palette [class*='bg-']").each(function(){
      function rgb2hex(rgb){
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
          ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
          ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
          ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
      }
      $(this).append('<p class="text-uppercase fs--1 mb-0 text-sans-serif  ">'+rgb2hex($(this).css("background-color"))+'</p>');
    });
  }
});
