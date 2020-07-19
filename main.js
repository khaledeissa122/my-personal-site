$(function(){

  $(".first li").on('click',function(){
    $(this).addClass("active").siblings().removeClass("active");
  })
  $(".main-menu-switcher").on('click',function(){
    $(".middle").toggleClass("active");
    $(".main-menu-switcher__inner").toggleClass("close");
  })

  $(".dot").on('click',function(){
    $($(this).data("class")).addClass("active").removeClass("inactive").siblings().removeClass("active").addClass("inactive");
    $(this).addClass("active").siblings().removeClass("active");
  })

  $(".body-proj").on('click',function(){
    $('.'+$(this).data("info")).addClass("active")
    $(".overlayOpen").addClass("overlay")
    console.log($('.'+$(this).data("info")))
  })

  // $(".close i").on('click',function(){
  //   $('.all').removeClass('active')
  //   $('.overlayOpen').removeClass('overlay')
  // })

  $(".overlayOpen").on('click',function(){
    $('.all').removeClass('active')
    $('.overlayOpen').removeClass('overlay')
  })

  // $(".main-menu .middle .over:first-child").on('click',function(){
  //   // $(".main-about").addClass("active");
  //   // $("section.about-me").addClass("active");
  //   $(".main-menu-switcher__inner").removeClass("close");
  //   $(".middle").removeClass("active");
  // })
  $(window).load(function(){
    $(".main-contact").addClass("active");
    $(".main-about").addClass("active");
    $(".data-one").addClass("main-intro");
    $("section.about-me").addClass("active");
    $(".main-menu-switcher__inner").removeClass("close");
    $(".middle").removeClass("active");
  })
  $(".contact-switcher ul li:first-child+*").on('click',function(){
    $(".main-contact").removeClass("active");
    $(".order").addClass("active");
  })
  $(".contact-switcher ul li:first-child").on('click',function(){
    $(".order").removeClass("active");
    $(".main-contact").addClass("active");
  })
  $(".contact-switcher ul li").on('click',function(){
    $(this).addClass("active").siblings().removeClass("active");
  })
});
