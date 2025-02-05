import {
    dsnCreateElementAjax
} from "./dsnElementAjax";




function ajaxSlider(data) {

    const active = data.trigger.parents(".slide-content"),
        id = active.data("dsn-id"),
        img = active.parents('.main-slider').find(".bg-container .swiper-slide[data-dsn-id=\"" + id + "\"] .cover-bg").first(),
        title = active.find(".title-lg"),
        bg_con = active.parents('.main-slider').find('.bg-container');

    img.removeClass("hidden");


    return dsnCreateElementAjax(img, bg_con, title, title);
}

export default ajaxSlider;