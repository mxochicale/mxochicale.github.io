function fixAltmetric() {
  var $width = $(window).width();

  $('.altmetric-embed').attr('data-badge-popover', 'left');

};

$(document).ready(function() {
  fixAltmetric();
});