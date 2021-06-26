var MyBBFancyBox = (function($, m) {
  "use strict";
  var lang = {
      clickToEnlarge: "Click to enlarge",
      CLOSE: "Close",
      NEXT: "Next",
      PREV: "Previous",
      ERROR:
        "The requested content cannot be loaded.<br/>Please try again later.",
      PLAY_START: "Start slideshow",
      PLAY_STOP: "Pause slideshow",
      FULL_SCREEN: "Full screen",
      THUMBS: "Thumbnails",
      DOWNLOAD: "Download",
      SHARE: "Share",
      ZOOM: "Zoom",
      MINIMIZE: "Minimize"
    },
    options = {
      slideClass: "",
      closeExisting: true,
      loop: true,
      protect: false,
      keyboard: true,
      arrows: true,
      infobar: true,
      thumbs: { autoStart: false, hideOnClose: true },
      buttons: [
        "slideShow",
        "fullScreen",
        "thumbs",
        "share",
        "download",
        "zoom",
        "minimize",
        "close"
      ]
    };
  function init() {
    if (options.buttons && options.buttons.indexOf("minimize") !== -1) {
      var yState = $("body").css("overflow-y");
      $(document).on("click", "[data-fancybox-minimize]", function() {
        var fb = $.fancybox.getInstance();
        if (fb) {
          fb.$refs.container.toggleClass("minimized");
          $("body").css(
            "overflow-y",
            fb.$refs.container.hasClass("minimized") ? yState : "hidden"
          );
        }
      });
    }
    $(".post_body img").each(function() {
      var currentImage = $(this);
      var pid = currentImage.parents(".post_body.scaleimages").attr("id");
      if (
        currentImage.hasClass("smilie") == false &&
        currentImage.parent().is("a") == false
      ) {
        currentImage.wrap(
          "<a title='" +
            lang.clickToEnlarge +
            "' target='_blank' data-fancybox='" +
            pid +
            "' data-type='image' href='" +
            currentImage.attr("src") +
            "'>"
        );
      }
    });
    $.fancybox.defaults.lang = "en";
    $.fancybox.defaults.i18n.en = lang;
    $("[data-fancybox]").fancybox(options);
  }
  function setup(l, o) {
    $.extend(lang, l || {});
    $.extend(options, o || {});
  }
  m.setup = setup;
  $(init);
  return m;
})(jQuery, MyBBFancyBox || {});
