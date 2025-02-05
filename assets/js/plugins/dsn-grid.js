import effectAnimate from "./dsn/animation/effectAnimate";
import {
    killAjax
} from "./dsn/useEffect";
import compareTowImg from "./dsn/compareTowImg";
import {
    dataAttr,
    checkMobile
} from './dsn/help';
import dsnSplitting from './dsn/help/dsnSplitting';
import scrollTop from './dsn/help/scrollTop';
import loadLazyImage from './dsn/help/loadLazyImage';
import loadMore, {
    getOptionAjax
} from './dsn/ajax/loadMore';
import dsnEffect, {
    animateNumber
} from "./dsn/animation/DesnEffect";
import dsnAjax from "./dsn/ajax/dsnAjax";
import pageLoad from "./dsn/help/pageLoad";
import mouseMove, {
    mouseHover
} from "./dsn/mouseMove";
import WebGLDistortionHoverEffects from "./dsn/threejs/WebGLDistortionHoverEffects";
import convertToJQuery from "./dsn/help/convertToJQuery";
import svgAnimate from "./dsn/animation/svgAnimate";
import useState from "./dsn/help/useState";
import * as hoverImage from "./dsn/motion-hover-effects/HoverImgFx";
import hdevSession from "./dsn/scipt/hdevSession";
import hdevStyle from "./dsn/scipt/hdevStyle";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);



dsnEffect.registerEffect(animateNumber)
window.dsnGrid = {};
window.$dsnEffect = {
    cursor: {
        x: 0,
        y: 0
    },
    matchMedia: gsap.matchMedia(),
    swiper: [],
    iso: [],
    kill: []
};
window.$wind = jQuery(window);
window.$body = jQuery("body");


window.$scene = [];


gsap.config({
    nullTargetWarn: false
});
gsap.defaults({
    duration: 1,
    overwrite: "auto",
});



/*!

 * VERSION: 1.0.20

 * DATE: 2021-08-12

 * UPDATES AND DOCS AT: https://www.dsngrid.com/

 *

 * @author: Design Grid, info@dsngrid.com , https://themeforest.net/user/design_grid/portfolio

 **/

dsnGrid.hs = new hdevSession();

dsnGrid.hdevStartTheme = () => {
    (new hdevStyle()).initTheme(dsnGrid.hs);
}




dsnGrid.effectAnimate = effectAnimate;
dsnGrid.getData = dataAttr;
dsnGrid.killAjax = killAjax;
dsnGrid.compareTowImg = compareTowImg;
dsnGrid.spltting = dsnSplitting;
dsnGrid.loadData = loadLazyImage;
dsnGrid.isMobile = checkMobile;
dsnGrid.getOptionAjax = getOptionAjax;
dsnGrid.loadMore = loadMore;
dsnGrid.scrollTop = scrollTop;
dsnGrid.pageLoad = pageLoad;
dsnGrid.dsnAjax = dsnAjax;
dsnGrid.mouseMove = mouseMove;
dsnGrid.mouseHover = mouseHover;
dsnGrid.getBoundingClientRect = function(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: jQuery(element).outerWidth() + 0.2,
        height: jQuery(element).outerHeight(),
        position: "fixed",
        maxWidth: '100%'
    };
}
dsnGrid.convertToJQuery = convertToJQuery;
dsnGrid.WebGLDistortionHoverEffects = WebGLDistortionHoverEffects;
dsnGrid.svgAnimate = svgAnimate();

window.dsnGrid.motionHoverEffect = hoverImage;
dsnGrid.useState = useState;

dsnGrid.initTheme = function() {
    if (!$body.hasClass('dsn-change-color'))
        return;

    $body.removeClass('dsn-change-color');
    const _dark = $body.find('.v-dark'),
        _light = $body.find('.v-light');

    _dark.removeClass('v-dark').addClass('v-light');
    _light.addClass('v-dark').removeClass('v-light');


}


jQuery.fn.dsnGridStyleObject = function() {

    return this.css([

        // "padding",

        "font-size",

        "font-style",

        "font-weight",

        "line-height",

        "letter-spacing",

        "color",


    ]);

};