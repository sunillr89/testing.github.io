import {
    dsnCreateElementAjax
} from "./dsnElementAjax";


function ajaxWork(data) {


    const
        active = data.trigger.parents(".dsn-item-post"),
        img = active.find(".box-image-bg"),
        title = active.find(".post-title");


    return dsnCreateElementAjax(img, img, title, title, {
        before({
            container,
            title,
            img
        }) {
            gsap.set(title, {
                width: "+=50"
            });
            gsap.to(img.find('img'), 1.5, {
                y: "0",
                height: "100%"
            })

        }
    });
}

export default ajaxWork;