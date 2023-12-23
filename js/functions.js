$(function(){

    //Definindo tamanho dos backgrounds

    $(window).resize(function(){
        bgTamanho();
        
        $('.menu-mobile').css('display', 'none'); //Garantindo que menu mobile não aparece ao aumentar tela
    });

    bgTamanho();

    function bgTamanho(){
        var a = $('.texto').offset().top;
        var b = $('.texto').height();
        $('.background').height(a + b + 163);
        //alert(a + b + 203);
        $('.bg-img').height(a + b + 163);
    }

    //Menu Hamburger

    $('.mobile-nav').click(function(){ 
        $('.menu-mobile').slideToggle();
        
    });


});