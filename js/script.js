
$(".gnb li a").click(function () {
  event.preventDefault();
  $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
});