'use strict'

$(document).ready(function () {

    let cambio = true;
    let monthly = $('#monthly');
    let annualy = $('#annualy');

    function monhtlyPrice() {
        monthly.removeClass('disabled');
        annualy.removeClass('actived');
        monthly.addClass('actived');
        annualy.addClass('disabled');
        cambio = true;
    }

    function annualyPrice() {
        monthly.removeClass('actived');
        annualy.removeClass('disabled');
        monthly.addClass('disabled');
        annualy.addClass('actived');

        cambio = false;
    }

    $('.switch-btn a').click(function () {

        if (cambio) {
            annualyPrice();
        } else {
            monhtlyPrice();
        }
        $('.table-content').toggleClass('rotate-table');
    });

    /*scroll top */
    $(".to-up").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000);
    })

})