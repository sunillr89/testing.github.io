import {
    dataAttr
} from "../help";

function fillBar() {
    const fillBar = this.querySelectorAll('.bar-svg .dsn-animate-skill');
    if (!fillBar) return;


    gsap.from(fillBar, 1.5, {
        strokeDashoffset: "100",
        stagger: 0.2,
        ease: Linear.easeNone,
        scrollTrigger: {
            trigger: this,
            start: "top 95%",
        },
        onUpdate: function() {
            this._targets.forEach(function(item) {
                const number = item.closest('.bar-svg').querySelector('.number');
                number.innerText = (100 - item.style.strokeDashoffset.match(/\d+/)[0]) + "%";
            });
        },
        onComplete: function() {
            if (!this.vars.scrollTrigger.scrub) {
                this.scrollTrigger.kill();
                this.kill();
            }
        }
    });

}

function progressRectangleBar() {
    const fillBar = this.querySelectorAll('.bar-progress .dsn-animate-skill');
    if (!fillBar) return;

    fillBar.forEach(item => {
        item.style.width = dataAttr(item, 'width');

    });

    gsap.from(fillBar, {
        width: "0%",
        stagger: 0.2,
        scrollTrigger: {
            trigger: this,
            start: "top 95%",
        },
        onUpdate: function() {
            this._targets.forEach(function(item) {
                const number = item.closest(".skills-inner") ? .querySelector('.number');
                number.innerText = (item.offsetWidth / item.closest('.bar-progress').offsetWidth * 100).toFixed(0) + "%";
            });
        },
        onComplete: function() {
            if (!this.vars.scrollTrigger.scrub) {
                this.scrollTrigger.kill();
                this.kill();
            }
        }
    });

}


function animateSkills($el = jQuery(document)) {
    $el.find(".dsn-skills").each(function() {
        fillBar.bind(this)();
        progressRectangleBar.bind(this)();
    });
}

export default animateSkills;