import {
    dataAttr
} from "../help";
import mediaMatching from "./MediaMatching";


function clearObject(obj) {
    for (const key in obj) {
        delete obj[key];
    }
}

function customAnimation($el = jQuery(document)) {

    $el.each(function() {

        const pin = $(this).find(".pinned-element");

        if (!pin.length)
            return;

        const {
            end = "{{children}}", off = "", start = "80px"
        } = dataAttr(this, 'option') || {};


        mediaMatching((context) => {
            const {
                isMobile,
                isTablet
            } = context.conditions;

            let children = (isMobile || isTablet) ? 80 : 120;


            if (isMobile || (off === "tablet" && isTablet))
                return;

            const isChildren = end.includes("{{children}}");
            if (isChildren)
                pin.find('> *').each(function(index, element) {
                    children += element.offsetHeight;

                })






            const st = ScrollTrigger.create({
                trigger: this,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                // markers : true ,
                pin,
                start: `top ${start}`,
                end: () => {
                    if (isChildren)
                        return `100%-=${parseInt(start) / 2} ${end.replace('{{height}}', this.offsetHeight).replaceAll('{{children}}', children)}`

                    return `bottom+=18 +=${end.replace('{{height}}', window.innerHeight)}-${this.offsetHeight}`;
                }
            });


            return () => {
                st ? .kill();
            }

        });


    });
}

export default customAnimation;