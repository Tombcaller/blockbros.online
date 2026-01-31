$(function() {

  $.i18n.init({lng: getLang(), preload: ['en-US', 'en','ja'] }).done(function() {
    $("#about").text($.t("about"));
    $("#contact_us").text($.t("contact_us"));
    $("#media").text($.t("media"));
    $("#get_presskit").text($.t("get_presskit"));
    $("#get_presskit").text($.t("get_presskit"));
    $("#sc01").attr("title", $.t("sc01"));
    $("#sc02").attr("title", $.t("sc02"));
    $("#sc03").attr("title", $.t("sc03"));
    $("#sc04").attr("title", $.t("sc04"));
    $("#sc05").attr("title", $.t("sc05"));

    $("#player").attr("src", "https://www.youtube.com/embed/TfUSgY8t_uA?enablejsapi=1");

    setup();
  })
});

function getLang() {
  return navigator.language.indexOf('ja') >= 0 ? 'ja' : 'en';
}

function onYouTubeIframeAPIReady(playerId) {
  var player = new YT.Player('player', {
          events: {
              'onStateChange': onPlayerStateChange
          }
      });
}

function onPlayerStateChange(event) {
  console.log(event);
  switch (event.data) {
    case 1:
    case 3:
      bqSlider.stopAuto();
    break;

    case 0:
    case 2:
      bqSlider.startAuto();
    break;
    case 3:
    break;
  }
}

var bqSlider;
function setup() {

  $('body').attr('id', getLang());
  bqSlider = $('.gallery').bxSlider({
      adaptiveHeight: false,
      responsive: false,
      captions: true,
      auto: true,
      randomStart: false,
  video: true,
  useCSS: false
  });
}

function cssLang() {
  return '[lang=' + getLang() + ']';
}

function l(string) {
   return string.toLocaleString();
}