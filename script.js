$(document).ready(function() {
  $(document).on("keyup", function(e) {
    if (e.keyCode == 27) {
      triggerNavigation();
    }
  });

  $(".trigger-menu, .dismiss-nav").click(function(e) {
    e.preventDefault();
    triggerNavigation();
  });

});

function triggerNavigation() {
  $(".nav-menu").css("display", "inherit").toggleClass("nav-menu-active");
}
