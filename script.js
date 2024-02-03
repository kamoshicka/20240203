$(document).ready(function () {

    const $submitBtn = $('#js-submit')
    $('#form_jquery input,#form_jquery textarea').on('change', function () {
      if (
        $('#form_jquery input[type="name"]').val() !== "" &&
        $('#form_jquery input[type="email"]').val() !== "" &&
        $('#form_jquery textarea').val() !== "" &&
        $('#form_jquery input[type="checkbox"]').val() !== "" &&
        $('#privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
        $submitBtn.css({'opacity':1,'transition':'1s','cursor':'pointer'});
      } else {
        $submitBtn.prop('disabled', true);
        $submitBtn.css({'opacity':.2,'transition':'1s','cursor':'default'});
      }
    });
  
  });

  $(".hamburger").click(function () {
    $(this).toggleClass('active');
});