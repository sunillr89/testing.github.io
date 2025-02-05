import beforeSendTransition from "./ajax-transition/beforeSendTransition";
import completeTransition from "./ajax-transition/completeTransition";
import initAjax, {
    initPlugins
} from "./ajax-transition/initAjax";
import {
    dataAttr
} from '../help';


function dsnAjax(options = {}) {

    const $ = jQuery;
    const ajx = Object.assign({}, {
        trigger: "#main_root",
        prevent: 'a.effect-ajax , #dsn-primary-list a:not([href*="#"])',
        mainRoot() {
            return $(this.trigger)
        }
    }, options);

    if (!ajx.mainRoot().length)
        return false;


    const handleClickAjax = function(e) {

        if ($body.hasClass(ajx.className))
            return;

        const menuItem = $(this).parent('.menu-item');

        if (menuItem.length && menuItem.parents('.dsn-hamburger').length && menuItem.find('> ul').length && menuItem.hasClass('has-sub-menu'))
            return;


        e ? .preventDefault();
        e ? .stopPropagation();
        const action = {
            trigger: $(this),
            url: $(this).attr("href"),
            start: null
        };

        try {


            if (e.type === "popstate") {
                action.url = window.location.href;
            }


            if (!action.url || action.url.indexOf("#") >= 0) return;


            $body.addClass(ajx.className);

            async function actionAjax() {
                const sendParam = {
                    trigger: action.trigger,
                    url: action.url,
                    current: ajx.mainRoot(),
                    next: null,
                    text: dataAttr(action.trigger, 'text')
                }
                await typeof options.beforeSend === "function" && await options.beforeSend(sendParam);
                window.dispatchEvent(new CustomEvent("dsn/ajax/beforeSend", {
                    bubbles: true,
                    detail: sendParam
                }));

                await beforeSendTransition(sendParam);
                await typeof options.afterSend === "function" && await options.afterSend(sendParam);
                window.dispatchEvent(new CustomEvent("dsn/ajax/afterSend", {
                    bubbles: true,
                    detail: sendParam
                }));
            }


            $.ajax({
                async: true,
                url: action.url,
                dataType: "html",
                beforeSend: function() {
                    action.start = actionAjax();
                    return action.start;
                },
                success: function(data) {

                    action.start.then(async () => {
                            const sendParam = {
                                trigger: action.trigger,
                                url: action.url,
                                current: ajx.mainRoot().clone(),
                                next: ajx.mainRoot()
                            }


                            /**
                             * Dispatch Event Before Success
                             */
                            await typeof options.beforeSuccess === "function" && await options.beforeSuccess(sendParam);
                            window.dispatchEvent(new CustomEvent("dsn/ajax/beforeSuccess", {
                                bubbles: true,
                                detail: sendParam
                            }));

                            if (e.type !== "popstate") {
                                await history.pushState(null, "", action.url);
                            }

                            /**
                             * Kill Ajax Page
                             */
                            await $dsnEffect.kill.forEach(function($item) {
                                $item();
                            });
                            $dsnEffect.kill = [];

                            /**
                             * Update title , meta , style , scripts
                             */
                            await initAjax(data);

                            await window.scrollTo(0, 0);

                            await ajx.mainRoot().html(jQuery(data).filter(ajx.trigger).html());

                            /**
                             * Dispatch Event  Success
                             */
                            (typeof options.success === "function") && await options.success(sendParam);
                            window.dispatchEvent(new CustomEvent("dsn/ajax/success", {
                                bubbles: true,
                                detail: sendParam
                            }));

                            /**
                             * update plugin contact form 7 , elementor
                             */
                            await initPlugins();
                            /**
                             * Animation page End
                             */
                            await completeTransition(sendParam, options);

                            /**
                             * Dispatch Event After Success
                             */
                            await typeof options.afterSuccess === "function" && options.afterSuccess(sendParam);
                            window.dispatchEvent(new CustomEvent("dsn/ajax/afterSuccess", {
                                bubbles: true,
                                detail: sendParam
                            }));


                        })
                        .catch(function(e) {
                            console.error(e)
                            // window.location = action.url;
                        });


                },
                error: function(e) {
                    console.error(e)
                    // window.location = action.url;
                },
            });
        } catch (e) {
            console.error(e)
            // if (e.type === "popstate") {
            //     window.location = window.location.href;
            // } else {
            //     window.location = action.url;
            // }
        }


    }


    return {
        start: function() {

            if (!$body.hasClass('dsn-ajax'))
                return;

            $(ajx.prevent).on('click', handleClickAjax);
            dsnGrid.killAjax(function() {
                $(ajx.prevent).off('click', handleClickAjax);
            });
        },
        backAnimate: function(e) {
            if (!$body.hasClass('dsn-ajax'))
                return;

            handleClickAjax(e);

        }
    }

}


export default dsnAjax;