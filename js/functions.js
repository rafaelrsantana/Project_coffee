$(function () {
  
    function disableTextSelection() {
        $("body").css("-webkit-user-select", "none")
        $("body").css("-moz-user-select", "none")
        $("body").css("-ms-user-select", "none")
        $("body").css("-o-user-select", "none")
        $("body").css("user-select", "none")

    }

    function enableTextSelection() {
        $("body").css("-webkit-user-select", "auto")
        $("body").css("-moz-user-select", "auto")
        $("body").css("-ms-user-select", "auto")
        $("body").css("-o-user-select", "auto")
        $("body").css("user-select", "auto")
    }

    var imgShow = 3
    var minIndex = imgShow - 1
    var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1
    var curIndex = 0

    initSlider()
    navigateSlider()
    clickSlider()
    function initSlider() {
        var amt = $('.mini-img-wraper').length * 33.3
        var elScroll = $('.nav-galeria-wraper')
        var elSingle = $('.mini-img-wraper')
        elScroll.css('width',amt+'%')
        elSingle.css('width',33.3*(100/amt)+'%')
    }

    function navigateSlider() {
        $('.arrow-right-nav').click(function(){
            if(curIndex < maxIndex){
                curIndex++
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'})
            }
        })

        $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'})
            }
        })
    }

    function clickSlider() {
        $('.mini-img-wraper').click(function(){
            $('.mini-img-wraper').css('background-color', 'transparent')
            $(this).css('background-color', 'rgb(210,210,210')
            var img = $(this).children().css('background-image')
            $('.foto-destaque').css('background-image', img)
        })

        $('.mini-img-wraper').eq(0).click()
    }


    $('.mobile').click(function(){
        $(this).find('ul').slideToggle()
    })

    $('#antigua').click(function() { 
        document.location = 'antigua.html';
    });

    $('#mocha').click(function() { 
        document.location = 'mocha.html';
    });

    $('#los').click(function() { 
        document.location = 'los.html';
    });

    $('#kenya').click(function() { 
        document.location = 'kenya.html';
    });

    $('#havai').click(function() { 
        document.location = 'havai.html';
    });

    $('#harrar').click(function() { 
        document.location = 'harrar.html';
    });


})