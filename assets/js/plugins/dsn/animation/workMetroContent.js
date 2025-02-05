import {
    killAjax
} from "../useEffect";
import mediaMatching from "./MediaMatching";

function workMetroContent($el = jQuery(document)) {
    $el.find('.dsn-style-metro.dsn-metro-1 .dsn-item-post .box-content:not(.dsn-metro-content-moved,.elementor-widget-dsn_posts_slider)').each(function() {
        this.classList.add('dsn-metro-content-moved');
        const selector = '.dsn-item-post .box-content';
        // const el = jQuery(this).find(selector);
        const el = jQuery(this);

        el.find(".post-content").css({
            pointerEvents: 'none'
        });
        el.find('.post-title').css({
            wordBreak: 'keep-all'
        });

        mediaMatching((context) => {
            const {
                isTablet,
                isMobile
            } = context.conditions;


            if (isMobile || isTablet)
                return;

            let initEl = {};


            el.on('mousemove', function(e) {

                const {
                    offsetX: left,
                    offsetY: top
                } = e;
                const elMove = this.querySelector('.post-content');

                if (!elMove)
                    return;
                if (!initEl[el.index(this)]) initEl[el.index(this)] = jQuery(elMove).css(['left', 'top']);


                const snapLeft = gsap.utils.snap({
                    values: [0, (this.offsetWidth * 2)],
                    radius: this.offsetWidth - elMove.offsetWidth
                }, left);

                if (snapLeft === 0)
                    gsap.set(elMove, {
                        left,
                        top,
                        right: "auto"
                    });
                else
                    gsap.set(elMove, {
                        left: this.offsetWidth - elMove.offsetWidth - 10,
                        top,
                        right: "auto"
                    });

            });

            el.on('mouseleave', function(e) {
                const elMove = this.querySelector('.post-content');
                if (!elMove)
                    return;

                gsap.to(elMove, 0.8, initEl[el.index(this)]);
                jQuery(this).find(`${selector} .post-content`).css({
                    pointerEvents: ''
                });
            });

            return () => {
                el.off('mousemove');
            }
        });


        killAjax(function() {
            el.off('mousemove');
        });
    });
}


export default workMetroContent;