$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
function Acvegizle() {
    var x = document.getElementById('gizli');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

}
$('#ackapa').click(function(e) {
    var $elm = $(this).find('i'),
        cDown = 'lni-eye',
        cUp = 'lni-close';
    if ($elm.hasClass(cDown)) {
        $elm.removeClass(cDown).addClass(cUp);
    }
    else {
        $elm.removeClass(cUp).addClass(cDown);
    }
});