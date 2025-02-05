function compareTowImg($target) {

    if (!$target)
        return;
    const img = $target.querySelector('.img-comp-overlay');
    if (!img)
        return;

    const slider = $target.querySelector('.dsn-handle-slider');

    var clicked = 0,
        w, h;
    const initImg = function() {
        w = img.offsetWidth;
        h = img.offsetHeight;

        setTimeout(function() {
            img.style.clipPath = "inset(0% 0% 0% " + (w / 2) + "px)";
            slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        }, 50);
    }


    initImg();


    const slideMove = function(e) {
        var pos;
        if (clicked == 0) return false;
        pos = (((e.changedTouches) ? e.changedTouches[0] : e).pageX - img.getBoundingClientRect().left) - window.pageXOffset

        if (pos < 0) pos = 0;
        if (pos > w) pos = w;


        slider.style.left = pos - (slider.offsetWidth / 2) + "px";
        img.style.clipPath = "inset(0% 0% 0% " + pos + "px)";
    }

    const slideReady = function(e) {
        e.preventDefault();
        clicked = 1;

        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
    }

    const slideFinish = function(e) {
        e.preventDefault();
        clicked = 0;

        window.removeEventListener("mousemove", slideMove);
        window.removeEventListener("touchmove", slideMove);
    }

    slider.addEventListener("mousedown", slideReady);
    slider.addEventListener("touchstart", slideReady);

    window.addEventListener("mouseup", slideFinish);
    window.addEventListener("touchend", slideFinish);
    window.addEventListener('resize', initImg);

    return {
        destroy: function() {
            slider.removeEventListener("mousedown", slideReady);
            slider.removeEventListener("touchstart", slideReady);
            window.removeEventListener("mouseup", slideFinish);
            window.removeEventListener("touchend", slideFinish);
            window.removeEventListener("mousemove", slideMove);
            window.removeEventListener("touchmove", slideMove);
            window.removeEventListener('resize', initImg);
        }
    };

}

export default compareTowImg;