import ajaxSlider from "./target/ajaxSlider";
import ajaxWork from "./target/ajaxWork";
import ajaxDefault from "./target/ajaxDefault";
import ajaxNextProject from "./target/ajaxNextProject";

async function actionEnterSend(data, option) {

    const $type = data.trigger.data('dsn-ajax');
    setTimeout(function() {
        dsnGrid.scrollTop(0, 0.1);
    }, 1000);

    // if ($type === "work")
    //     return ajaxWork(data, option);
    if ($type === "slider")
        return ajaxSlider(data, option);
    if ($type === "next")
        return ajaxNextProject(data, option);


    return ajaxDefault.start(data, option);


}

async function beforeSendTransition(data, option) {


    return new Promise(function(resolve) {
        return actionEnterSend(data, option)
            .then(function(animate) {
                $effectScroll.locked();
                return animate;
            }).then(function() {
                resolve(true);
            })
    });

}

export default beforeSendTransition;