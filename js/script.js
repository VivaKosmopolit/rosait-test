$('.carousel').carousel({
    interval: 3500,
    pause: "false"
    /*    pause: true,
        interval: false*/
});

function startPr() {
    let btn = $('.presentation-wrapper');
    let slider = $('.carousel');
    btn.addClass('fadeIn');
    function reveal() {
        slider.show();
        btn.hide();
        function fadeOut() {
            slider.addClass('fadeOut');
        }
        setTimeout(fadeOut, 500);
    }
    setTimeout(reveal, 4000);
}

