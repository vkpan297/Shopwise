$(document).ready(function(){
    

    $(".header__icon").click(function(){
        $(".list-item").toggleClass('show');
    });
    $(".menu1").click(function(){
        $(".nav1").slideToggle(-10000000);
    });
    $(".list_item").click(function(e){
        e.stopPropagation()
    });
    $(".text-capitalize").click(function(e){
        e.stopPropagation()
    });
    $(".menu2").click(function(){
        $(".nav2").slideToggle(-10000000);
    });
    $(".menu3").click(function(){
        $(".nav3").slideToggle(-10000000);
    });
    $(".menu4").click(function(){
        $(".nav4").slideToggle(-10000000);
    });
    $(".menu5").click(function(){
        $(".nav5").slideToggle(-10000000);
    });
    $(".bl1").click(function(){
        $(".list").slideToggle(-10000000);
    });
    $(".bl2").click(function(){
        $(".list_masonry").slideToggle(-10000000);
    });
    $(".bl3").click(function(){
        $(".list_sig").slideToggle(-10000000);
    });
    $(".bl4").click(function(){
        $(".list_l").slideToggle(-10000000);
    });

    

    $(".countries-second").click(function(){
        $(".countries_nav").css("opacity","1");
        $(".countries_nav").css("transform","scale(1) translateY(0)");
        $(".countries_nav").css("z-index","99999");
        $(".countries_nav").slideToggle(-1000000);
        
    });
    $(".money-second").click(function(){
        $(".money_nav").css("opacity","1");
        $(".money_nav").css("transform","scale(1) translateY(0)");
        $(".money_nav").css("z-index","99999");
        $(".money_nav").slideToggle(-1000000);
        
    });
    
        let nation = document.querySelectorAll(".countries_item");
        let op_itemshow = document.querySelector(".ddcontries");
        console.log(nation);
        nation.forEach(function (item) {
          item.addEventListener("click", function () {
            op_itemshow.innerHTML = this.innerHTML+'<i class="fas fa-angle-down"></i>';
          });
        });
        
        let nation2 = document.querySelectorAll(".money_item");
        let op_itemshow2 = document.querySelector(".ddmoney");
        console.log(nation2);
        nation2.forEach(function (item2) {
        item2.addEventListener("click", function () {
          op_itemshow2.innerHTML = this.innerHTML+'<i class="fas fa-angle-down"></i>';
        });
        });
    
        // let nation3 = document.querySelectorAll(".img_item");
        // let op_itemshow3 = document.querySelector(".head_img");
        // console.log(nation3);
        // nation3.forEach(function (item3) {
        //   item3.addEventListener("click", function () {
        //     op_itemshow3.innerHTML = this.innerHTML;
        //   });
        // });
    
        new WOW().init();
    
        $(".slider").owlCarousel({
            loop:true,        
            nav:true,
            margin: 18,
            dots:false,
            autoplay: true, 
            navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                },
                1200:{
                    items:1
                },
            }
        });
        $(".bottom-item").owlCarousel({
            loop:true,        
            nav:true,
            margin: 18,
            dots:false,
            autoplay: true, 
            navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                },
                1200:{
                    items:4
                },
            }
        });

        $(".featured_wrap").owlCarousel({
            loop:true,        
            nav:true,
            margin: 18,
            dots:false,
            autoplay: true, 
            navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                },
                1200:{
                    items:4
                },
            }
        });
        
        $(".client_wrap").owlCarousel({
            loop:true,        
            nav:true,
            margin: 18,
            dots:false,
            autoplay: true, 
            navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                },
                1200:{
                    items:1
                },
            }
        });

        $(".ins-img").owlCarousel({
            loop:true,        
            nav:false,
            margin: 18,
            dots:false,
            autoplay: true, 
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                },
                1200:{
                    items:6
                },
            }
        });
        $(".logo_icon-nav").owlCarousel({
            loop:true,        
            nav:false,
            margin: 18,
            dots:false,
            autoplay: true, 
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                },
                1200:{
                    items:5
                },
            }
        });
    
        var btn = $('#button');
    
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

    
    
   
    $(window).on('load', function() {
		setTimeout(function () {
            $(".preloader").delay(700).fadeOut(700).addClass('loaded');
            $(".submit_content").addClass("show");
            $(".sub_overlay").addClass("show");
		}, 800);
	});
    $(".close").click(function(){
        $(".submit_content").removeClass("show");
        $(".sub_overlay").removeClass("show");    
    });
    
    
    $(".menu_search-item-search").click(function(){
        $(".search_wrap").addClass("show");
        $(".search_overlay").addClass("show");
    });
    
    $(".close-search").click(function(e){
        e.stopPropagation()
        $(".search_wrap").removeClass("show");
        $(".search_overlay").removeClass("show");    
    });
    $(".info_pro1").click(function(){
        $(".list-product").addClass("show");
        $(".pro_overlay").addClass("show");
    });
    $(".close").click(function(){
        $(".list-product").removeClass("show");
        $(".pro_overlay").removeClass("show");    
    });
    
    $(".info_pro2").click(function(ev){
        ev.stopPropagation()
    
        $(".info_pro").addClass("show");
        $(".pro_overlay").addClass("show");
    });
    $(".close").click(function(){
    
        $(".info_pro").removeClass("show");
        $(".pro_overlay").removeClass("show");
    });
        $('.plus').on('click', function() {
            if ($(this).prev().val()) {
                $(this).prev().val(+$(this).prev().val() + 1);
            }
        });
        $('.minus').on('click', function() {
            if ($(this).next().val() > 1) {
                if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
            }
        });
    
        $(window).on('load',function(){
            /*----- loader ---------*/
            $('.loaded').fadeOut();
        });
        $(window).on('load', function(event) {
            $('body').removeClass('preloading');
            // $('.load').delay(1000).fadeOut('fast');
            $('.loaded').delay(6000).fadeOut('fast');
        });
    
    });
    
    $(document).ready(function() {
        $(".size-item").click(function () {
            $(".size-item").removeClass("active");
            $(this).addClass("active");   
        });
    });
    $(document).ready(function() {
        $(".img_item").click(function () {
            $(".img_item").removeClass("active");
            $(this).addClass("active");   
        });
    });
    $(document).ready(function() {
        $(".color").click(function () {
            $(".color").removeClass("active");
            $(this).addClass("active");   
        });

        $("#zoompro").elevateZoom({
            gallery: "gallery",
            galleryActiveClass: "active",
            zoomWindowWidth: 300,
            zoomWindowHeight: 100,
            scrollZoom: true,
            zoomType: "lens",
            lensShape: "round",
            
           
            });
    });

    $(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 150) {
            $('header1.fixed-top').addClass('nav-fixed');
	    } else {
            $('header1.fixed-top').removeClass('nav-fixed');
	    }

    });

    
    
    