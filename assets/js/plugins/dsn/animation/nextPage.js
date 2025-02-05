import {
    killAjax
} from "../useEffect";
import {
    dataAttr
} from "../help";

function nextPage() {
    jQuery('.next-project').each(function() {

        const _img = this.querySelector('.bg-containers > .before-z-index'),
            heroTitle = this.querySelector('.bg-containers .title-lg'),
            _cat = this.querySelector('.bg-containers') ? .querySelectorAll('.arrow ,  .is-sub span'),
            _title_next = this.querySelector('.box-title .title-lg'),
            _footer = this.querySelector('.footer-personal'),
            tween = gsap.timeline({
                scrollTrigger: {
                    trigger: this,
                    scrub: true,
                    // end: 'top',
                    pin: true,
                    end: "+=2000",
                    // onUpdate: self => {
                    //     console.log(self.progress)
                    //     if ( self.progress > 0.998 ) {
                    //         $(heroTitle).find( 'a' ).click();
                    //     }
                    // }
                },
                defaults: {
                    ease: 'none'
                }
            });


        this.classList.add("pointer-event-all")


        if (_img)
            tween.fromTo(_img, {
                rotate: "9deg",
                yPercent: 10,
                scale: 1.5
            }, {
                rotate: "0deg",
                yPercent: 0,
                scale: 1
            }, 0);


        if (heroTitle) {
            dsnGrid.spltting.Char(heroTitle)

            tween.fromTo(
                heroTitle.querySelectorAll(".char"), {
                    y: 100,
                    autoAlpha: 0
                }, {
                    duration: 1,
                    stagger: {
                        from: "center",
                        amount: 0.2
                    },
                    force3D: true,
                    y: "0",
                    autoAlpha: 1,
                    ease: Back.easeOut.config(1.7),
                }, 0);
        }

        if (_cat)
            tween.fromTo(
                _cat, {
                    autoAlpha: 0,
                    y: -10
                }, {
                    duration: 0.5,
                    stagger: {
                        from: "end",
                        amount: 0.5
                    },
                    force3D: true,
                    y: "0",
                    autoAlpha: 1,
                    ease: Back.easeOut.config(1.7),
                }, 0);


        if (_title_next)
            tween.to(_title_next, {
                fontSize: 25
            }, 0)

        if (_footer)
            tween.from(_footer, {
                yPercent: 50,
                autoAlpha: 0
            }, 0)


        killAjax(function() {
            tween.scrollTrigger ? .kill();
            tween.kill();

        })

    });

}

export default nextPage;