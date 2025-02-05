import {
    dsnCreateElementAjax
} from "./dsnElementAjax";


function ajaxNextProject(data) {


    const
        active = data.trigger.parents('.next-project'),
        img = active.find(".bg-containers > .before-z-index"),
        title = data.trigger.parents(".title-lg");


    return dsnCreateElementAjax(img, active, title, title, {
        before({
            container,
            title,
            img
        }) {
            gsap.set(title, {
                width: "+=40"
            });
        }
    });
}

export default ajaxNextProject;