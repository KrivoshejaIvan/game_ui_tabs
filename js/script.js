$(document).ready(function () {
    $('.tabs-section').on('click', '.content-tab:not(.tab-active)', (function (e) {
        $('.content-tab').removeClass('tab-active');
        $(this).addClass('tab-active'); //Почему нельзя использовать e.target?
        $('.content-section').removeClass('active').eq($(this).index()).addClass('active');//Почему нельзя использовать e.target?
    }))
});