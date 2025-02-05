import {
    killAjax
} from "../useEffect";

function headerPages() {
    jQuery('.dsn-header-animation').each(function() {

        const $this = jQuery(this),
            heroImg = $this.find(".dsn-hero-parallax-img"),

            linkProject = $this.find("> .link-project"),
            heroTitle = $this.find(".dsn-hero-parallax-title");




        const parallax = gsap.timeline({
            scrollTrigger: {
                trigger: $this,
                start: "top",
                end: "100%",
                scrub: true
            },
            defaults: {
                yoyo: true,
                overwrite: "none"
            }
        });
        if (heroImg.length) {
            parallax.to(heroImg.hasClass("bg-container") ? heroImg : heroImg.find("img"), {
                y: "30%"
            }, 0);
        }



        if (linkProject.length)
            parallax.from(linkProject, {
                right: 120
            }, 0);


        if (heroTitle.length)
            parallax.to(heroTitle, {
                y: "-10%",
                autoAlpha: 0,
            }, 0);


        killAjax(function() {
            parallax.scrollTrigger ? .kill();
            parallax.kill();
        });

    });
}

export default headerPages;