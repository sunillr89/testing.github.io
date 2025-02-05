import {
    dataAttr
} from "../../../help";



function ajaxDefaultStart(data) {


    const _wrapper = jQuery("<div class=\"dsn-ajax-loader dsn-ajax-normal bg-load background-section d-flex flex-column justify-content-between text-center\">");
    const svg = (direction) => jQuery(`<svg class="dsn-separator-${direction} dsn-icon-assistant-color" width="100%" height="100%" viewBox="0 0 100 10"
         preserveAspectRatio="none">
        <path class="path-anim separator__path" data-dsn-to="M 0 0 C 40 0 55 0 100 0 L 0 0 Z"
              vector-effect="non-scaling-stroke" d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z"></path>
    </svg>`);

    const trigger = data.text ? data.text : data.trigger.text() ? data.trigger.text() : dsnParam.name;


    const svgTop = svg('top'),
        svgBottom = svg("bottom"),
        title = jQuery('<h6 class="d-flex justify-content-center title"><span >' + trigger + '</span></h6>');


    gsap.set(_wrapper, {
        yPercent: 100,
        y: 150
    });
    _wrapper.append(svgTop);
    _wrapper.append(title);
    _wrapper.append(svgBottom);


    $body.append(_wrapper);

    return gsap.timeline({
            defaults: {
                ease: Expo.easeInOut
            }
        })
        .to(_wrapper, {
            yPercent: 0,
            y: 0,
            duration: 1.5
        }).to(svgTop.find('.path-anim'), {
            attr: {
                d: dataAttr(svgTop.find('.path-anim'), 'to')
            },
            overwrite: "none",
            duration: 1.5
        }, 0)
        .to(data.current, 1, {
            y: -400
        }, "-=1.2");

}

function ajaxDefaultEnd(data) {


    const bg = jQuery('.dsn-ajax-loader'),
        svgBottom = bg.find('.dsn-separator-bottom .path-anim');


    if (!bg.length)
        return false;

    return gsap.timeline({
            defaults: {
                ease: Expo.easeInOut
            }
        }).to(bg, {
            yPercent: -100,
            duration: 1.5
        }).to(svgBottom, {
            attr: {
                d: dataAttr(svgBottom, 'to')
            },
            overwrite: "none",
            duration: 1.5
        }, 0)
        .fromTo(data.next, 1, {
            y: 400
        }, {
            y: 0,
            clearProps: true
        }, "-=1.3");

}

const ajaxDefault = {
    start: ajaxDefaultStart,
    end: ajaxDefaultEnd
};
export default ajaxDefault;