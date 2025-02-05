import {
    getMousePos
} from "./Math";


export default class EffectShell {
    constructor(el) {
        this.DOM = {
            el: el
        };
        this.srcImg = this.DOM.el.dataset.img;
        this.setup(el);
        this.initEvents();
    }

    setup() {
        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.srcImg})"></div></div>`;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
        this.DOM.revealInner.style.overflow = 'hidden';
        this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
    }

    positionElement(e) {
        const mousePos = getMousePos(e);
        const docScrolls = {
            left: document.body.scrollLeft + document.documentElement.scrollLeft,
            top: document.body.scrollTop + document.documentElement.scrollTop
        };
        this.DOM.reveal.style.top = `${mousePos.y + 20 - docScrolls.top}px`;
        this.DOM.reveal.style.left = `${mousePos.x + 20 - docScrolls.left}px`;
    }


    initEvents() {
        this.mouseenterFn = (ev) => {
            this.positionElement(ev);
            this.showImage();
        };

        this.mousemoveFn = ev => requestAnimationFrame(() => {
            this.positionElement(ev);
        });

        this.mouseleaveFn = () => {
            this.hideImage();
        };

        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    }

    kill() {
        this.DOM.el.removeEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.removeEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.removeEventListener('mouseleave', this.mouseleaveFn);

        this.tl ? .kill();
    }


    showImage() {}

    hideImage() {}
}