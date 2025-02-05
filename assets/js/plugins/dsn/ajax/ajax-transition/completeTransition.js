import ajaxDefault from "./target/ajaxDefault";
import {
    dsnTransitionElement
} from "./target/dsnElementAjax";


async function actionEnter(data, option) {
    const loader = jQuery('.dsn-ajax-loader');

    if (loader.hasClass("dsn-transition-section"))
        return dsnTransitionElement();
    else
        return ajaxDefault.end(data, option);
}

function completeTransition(data, option) {
    return new Promise(function(resolve, reject) {
        return actionEnter(data, option)
            .then((animate) => {
                $body.removeClass(option.className);
                jQuery('.dsn-ajax-loader').remove();
                if (option.onComplete)
                    option.onComplete(data, option)

                window.dispatchEvent(new CustomEvent("dsn/ajax/complete", {
                    bubbles: true,
                    detail: data
                }));

                return animate;
            })
            .then((animate) => resolve(animate)).catch((e) => console.error("error on completeTransition", e));
    });
}

export default completeTransition;