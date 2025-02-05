import EffectShell from "./EffectShell";
import {
    getRandomFloat
} from "./Math";

/**
 *
 */
export class HoverImgFx1 extends EffectShell {

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.2, {
                ease: Sine.easeOut,
                startAt: {
                    x: '-100%'
                },
                x: '0%'
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.2, {
                ease: Sine.easeOut,
                startAt: {
                    x: '100%'
                },
                x: '0%'
            }), 'begin');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.2, {
                ease: Sine.easeOut,
                x: '100%'
            }), 'begin')

            .add(new TweenMax(this.DOM.revealImg, 0.2, {
                ease: Sine.easeOut,
                x: '-100%'
            }), 'begin');
    }
}

/**
 *
 */
export class HoverImgFx2 extends EffectShell {
    constructor(el) {
        super(el);
    }

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.4, {
                ease: Quint.easeOut,
                startAt: {
                    x: '-100%',
                    y: '-100%'
                },
                x: '0%',
                y: '0%'
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.4, {
                ease: Quint.easeOut,
                startAt: {
                    x: '100%',
                    y: '100%'
                },
                x: '0%',
                y: '0%'
            }), 'begin');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.3, {
                ease: Quint.easeOut,
                x: '100%',
                y: '100%'
            }), 'begin')

            .add(new TweenMax(this.DOM.revealImg, 0.3, {
                ease: Quint.easeOut,
                x: '-100%',
                y: '-100%'
            }), 'begin');
    }
}

/**
 *
 */
export class HoverImgFx3 extends EffectShell {

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .add('begin')
            .set([this.DOM.revealInner, this.DOM.revealImg], {
                transformOrigin: '50% 100%'
            })
            .add(new TweenMax(this.DOM.revealInner, 0.4, {
                ease: Expo.easeOut,
                startAt: {
                    x: '50%',
                    y: '120%',
                    rotation: 50
                },
                x: '0%',
                y: '0%',
                rotation: 0
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.4, {
                ease: Expo.easeOut,
                startAt: {
                    x: '-50%',
                    y: '-120%',
                    rotation: -50
                },
                x: '0%',
                y: '0%',
                rotation: 0
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.7, {
                ease: Expo.easeOut,
                startAt: {
                    scale: 2
                },
                scale: 1
            }), 'begin');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.6, {
                ease: Expo.easeOut,
                y: '-120%',
                rotation: -5
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.6, {
                ease: Expo.easeOut,
                y: '120%',
                rotation: 5,
                scale: 1.2
            }), 'begin')
    }
}


// Effect 4
export class HoverImgFx4 extends EffectShell {

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.8, {
                ease: Expo.easeOut,
                startAt: {
                    opacity: 0,
                    y: '50%',
                    rotation: -15,
                    scale: 0
                },
                y: '0%',
                rotation: 0,
                opacity: 1,
                scale: 1
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.8, {
                ease: Expo.easeOut,
                startAt: {
                    rotation: 15,
                    scale: 2
                },
                rotation: 0,
                scale: 1
            }), 'begin');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.15, {
                ease: Sine.easeOut,
                y: '-40%',
                rotation: 10,
                scale: 0.9,
                opacity: 0
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.15, {
                ease: Sine.easeOut,
                rotation: -10,
                scale: 1.5
            }), 'begin')
    }
}

// Effect 5
export class HoverImgFx5 extends EffectShell {

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set(this.DOM.revealInner, {
                opacity: 0
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealDeco, 0.8, {
                ease: Expo.easeOut,
                startAt: {
                    opacity: 0,
                    scale: 0,
                    rotation: 35
                },
                opacity: 1,
                scale: 1,
                rotation: 0
            }), 'begin')
            .add(new TweenMax(this.DOM.revealInner, 0.8, {
                ease: Expo.easeOut,
                startAt: {
                    scale: 0,
                    rotation: 35
                },
                rotation: 0,
                scale: 1,
                opacity: 1
            }), 'begin+=0.15')
            .add(new TweenMax(this.DOM.revealImg, 0.8, {
                ease: Expo.easeOut,
                startAt: {
                    rotation: -35,
                    scale: 2
                },
                rotation: 0,
                scale: 1
            }), 'begin+=0.15')
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax([this.DOM.revealDeco, this.DOM.revealInner], 0.2, {
                ease: Expo.easeOut,
                opacity: 0,
                scale: 0.9
            }), 'begin')
    }
}


// Effect 6
export class HoverImgFx6 extends EffectShell {


    showImage() {
        TweenMax.killTweensOf(this.DOM.reveal);
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .add('begin')
            .set(this.DOM.revealInner, {
                x: '100%'
            })
            .set(this.DOM.revealDeco, {
                transformOrigin: '100% 50%'
            })
            .add(new TweenMax(this.DOM.revealDeco, 0.3, {
                ease: Sine.easeInOut,
                startAt: {
                    scaleX: 0
                },
                scaleX: 1
            }), 'begin')
            .set(this.DOM.revealDeco, {
                transformOrigin: '0% 50%'
            })
            .add(new TweenMax(this.DOM.revealDeco, 0.6, {
                ease: Expo.easeOut,
                scaleX: 0
            }), 'begin+=0.3')
            .add(new TweenMax(this.DOM.revealInner, 0.6, {
                ease: Expo.easeOut,
                startAt: {
                    x: '100%'
                },
                x: '0%'
            }), 'begin+=0.45')
            .add(new TweenMax(this.DOM.revealImg, 0.6, {
                ease: Expo.easeOut,
                startAt: {
                    x: '-100%'
                },
                x: '0%'
            }), 'begin+=0.45')
            .add(new TweenMax(this.DOM.revealImg, 1.6, {
                ease: Expo.easeOut,
                startAt: {
                    scale: 1.3
                },
                scale: 1
            }), 'begin+=0.45')
            .add(new TweenMax(this.DOM.reveal, 0.8, {
                ease: Quint.easeOut,
                startAt: {
                    x: '20%',
                    rotation: 10
                },
                x: '0%',
                rotation: 0
            }), 'begin');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.reveal);
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.1, {
                ease: Sine.easeOut,
                x: '-100%'
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.1, {
                ease: Sine.easeOut,
                x: '100%'
            }), 'begin')
    }
}


// Effect 7
export class HoverImgFx7 extends EffectShell {

    showImage() {
        TweenMax.killTweensOf(this.DOM.reveal);
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .add('begin')
            .set(this.DOM.revealInner, {
                opacity: 0
            })
            .set(this.DOM.revealDeco, {
                transformOrigin: '-5% 50%'
            })
            .add(new TweenMax(this.DOM.revealDeco, 0.2, {
                ease: Quad.easeInOut,
                startAt: {
                    scaleX: 0
                },
                scaleX: 1,
                scaleY: 0.8
            }), 'begin')
            .set(this.DOM.revealDeco, {
                transformOrigin: '105% 50%'
            })
            .add(new TweenMax(this.DOM.revealDeco, 0.3, {
                ease: Sine.easeOut,
                scaleX: 0,
                scaleY: 1
            }), 'begin+=0.2')
            .add(new TweenMax(this.DOM.revealInner, 0.9, {
                ease: Elastic.easeOut.config(1, 0.6),
                startAt: {
                    scale: 0,
                    opacity: 1,
                    x: '0%'
                },
                scale: 1,
            }), 'begin+=0.4')
            .add(new TweenMax(this.DOM.revealImg, 0.8, {
                ease: Expo.easeOut,
                rotation: -15,
            }), 'begin')
            .add(new TweenMax(this.DOM.reveal, 1.1, {
                ease: Quint.easeOut,
                startAt: {
                    x: '-50%',
                    y: '10%',
                    rotation: -35
                },
                x: '0%',
                y: '0%',
                rotation: 15
            }), 'begin');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.reveal);
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add(new TweenMax(this.DOM.revealInner, 0.13, {
                ease: Sine.easeOut,
                scale: 0.8,
                opacity: 0
            }));
    }
}


// Effect 8
export class HoverImgFx8 extends EffectShell {
    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set(this.DOM.revealInner, {
                opacity: 0
            })
            .add('begin')
            .set(this.DOM.revealDeco, {
                transformOrigin: '50% 0%'
            })
            .add(new TweenMax(this.DOM.revealDeco, 0.6, {
                ease: Cubic.easeInOut,
                startAt: {
                    opacity: 0,
                    x: '15%',
                    y: '50%',
                    scaleY: 3
                },
                scaleY: 1,
                opacity: 1,
                y: '-15%'
            }), 'begin')
            .add(new TweenMax(this.DOM.revealInner, 0.8, {
                ease: Expo.easeOut,
                startAt: {
                    y: '100%',
                    rotation: 3
                },
                opacity: 1,
                rotation: 0,
                y: '0%'
            }), 'begin+=0.4')
            .add(new TweenMax(this.DOM.revealImg, 1.3, {
                ease: Expo.easeOut,
                startAt: {
                    scale: 1.4
                },
                scale: 1
            }), 'begin+=0.4')
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax([this.DOM.revealDeco, this.DOM.revealInner], 0.2, {
                ease: Expo.easeOut,
                opacity: 0
            }), 'begin')
    }
}


// Effect 9
export class HoverImgFx9 extends EffectShell {
    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set([this.DOM.revealInner, this.DOM.revealImg, this.DOM.revealDeco], {
                transformOrigin: '120% 0%'
            })
            .set(this.DOM.revealInner, {
                opacity: 0
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealDeco, 0.8, {
                ease: Expo.easeOut,
                startAt: {
                    opacity: 0,
                    rotation: -80,
                    x: '15%',
                    y: '60%'
                },
                opacity: 1,
                rotation: 0,
                y: '-15%'
            }), 'begin')
            .add(new TweenMax(this.DOM.revealInner, 0.8, {
                ease: Expo.easeOut,
                startAt: {
                    x: '50%',
                    y: '150%',
                    rotation: -25
                },
                opacity: 1,
                x: '0%',
                y: '0%',
                rotation: 0
            }), 'begin+=0.25')


            .add(new TweenMax(this.DOM.revealImg, 0.8, {
                ease: Expo.easeOut,
                startAt: {
                    y: '-150%',
                    rotation: -25
                },
                y: '0%',
                rotation: 0
            }), 'begin+=0.25');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax([this.DOM.revealDeco, this.DOM.revealInner], 0.2, {
                ease: Expo.easeOut,
                opacity: 0
            }), 'begin')
    }
}


// Effect 10
export class HoverImgFx10 extends EffectShell {
    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set(this.DOM.revealInner, {
                opacity: 0
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealDeco, 0.5, {
                ease: Expo.easeOut,
                startAt: {
                    scale: 0,
                    opacity: 1,
                    rotation: -10
                },
                scale: 1.6,
                rotation: 0
            }), 'begin')
            .add(new TweenMax(this.DOM.revealDeco, 0.3, {
                ease: Sine.easeOut,
                opacity: 0
            }), 'begin+=0.2')
            .add(new TweenMax(this.DOM.revealInner, 0.6, {
                ease: Expo.easeOut,
                startAt: {
                    scale: 0,
                    opacity: 0,
                    rotation: 10
                },
                scale: 1,
                opacity: 1,
                rotation: 0
            }), 'begin+=0.2');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax([this.DOM.revealDeco, this.DOM.revealInner], 0.2, {
                ease: Expo.easeOut,
                opacity: 0,
                scale: 0.9
            }), 'begin')
    }
}


// Effect 11
export class HoverImgFx11 extends EffectShell {
    showImage() {
        TweenMax.killTweensOf(this.DOM.reveal);
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .add('begin')
            .set(this.DOM.revealInner, {
                y: '100%'
            })
            .set(this.DOM.revealDeco, {
                transformOrigin: '50% 100%'
            })
            .add(new TweenMax(this.DOM.revealDeco, 0.3, {
                ease: Sine.easeInOut,
                startAt: {
                    scaleY: 0,
                    scaleX: 10
                },
                scaleY: 1,
                scaleX: 1
            }), 'begin')
            .set(this.DOM.revealDeco, {
                transformOrigin: '50% 0%'
            })
            .add(new TweenMax(this.DOM.revealDeco, 0.3, {
                ease: Expo.easeOut,
                scaleY: 0
            }), 'begin+=0.3')
            .add(new TweenMax(this.DOM.revealInner, 0.5, {
                ease: Expo.easeOut,
                startAt: {
                    y: '100%'
                },
                y: '0%'
            }), 'begin+=0.4')
            .add(new TweenMax(this.DOM.revealImg, 0.5, {
                ease: Expo.easeOut,
                startAt: {
                    y: '-100%'
                },
                y: '0%'
            }), 'begin+=0.4')
            .add(new TweenMax(this.DOM.revealImg, 0.5, {
                ease: Expo.easeOut,
                startAt: {
                    y: '100%'
                },
                y: '0%'
            }), 'begin+=0.4')
            .add(new TweenMax(this.DOM.reveal, 1.1, {
                ease: Expo.easeOut,
                startAt: {
                    y: '50%',
                    rotation: 10
                },
                y: '0%',
                rotation: 0
            }), 'begin');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.reveal);
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDeco);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.1, {
                ease: Sine.easeOut,
                y: '-100%'
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.1, {
                ease: Sine.easeOut,
                y: '100%'
            }), 'begin')
    }
}


// Effect 12
export class HoverImgFx12 extends EffectShell {
    setup() {
        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.totalDecos = 7;
        let inner = '';
        for (let i = 0; i <= this.totalDecos - 1; ++i) {
            inner += '<div class="hover-reveal__deco dsn-revere-bg"></div>';
        }
        inner += `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.srcImg})"></div></div>`
        this.DOM.reveal.innerHTML = inner;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealDecos = [...this.DOM.reveal.querySelectorAll('.hover-reveal__deco')];
        this.DOM.revealDecos.forEach((deco, pos) => {
            TweenMax.set(deco, {
                width: pos === this.totalDecos - 1 ? '100%' : `${getRandomFloat(40, 100)}%`,
                height: pos === this.totalDecos - 1 ? '100%' : `${getRandomFloat(5, 30)}%`,
                x: pos === this.totalDecos - 1 ? '0%' : `${getRandomFloat(-100, 100)}%`,
                y: pos === this.totalDecos - 1 ? '0%' : `${getRandomFloat(-300, 300)}%`,
                scaleX: 0
            });
        });
        this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
        this.DOM.revealInner.style.overflow = 'hidden';
        this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');

    }

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDecos);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .add('begin')
            .set(this.DOM.revealInner, {
                x: '100%',
                opacity: 0
            })
            .set(this.DOM.revealDecos, {
                transformOrigin: '100% 50%'
            })
            .staggerTo(this.DOM.revealDecos, 0.3, {
                ease: Expo.easeInOut,
                scaleX: 1
            }, 0.06, 'begin')
            .staggerTo(this.DOM.revealDecos, getRandomFloat(0.3, 0.6), {
                ease: Expo.easeOut,
                startAt: {
                    transformOrigin: '0% 50%'
                },
                scaleX: 0,
                x: '-=5%'
            }, 0.04, 'begin+=0.3')
            .add(new TweenMax(this.DOM.revealInner, 0.6, {
                ease: Expo.easeOut,
                startAt: {
                    x: '100%'
                },
                x: '0%',
                opacity: 1
            }), 'begin+=0.75')
            .add(new TweenMax(this.DOM.revealImg, 0.6, {
                ease: Expo.easeOut,
                startAt: {
                    x: '-100%'
                },
                x: '0%'
            }), 'begin+=0.75');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);
        TweenMax.killTweensOf(this.DOM.revealDecos);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.1, {
                ease: Sine.easeOut,
                x: '-100%'
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.1, {
                ease: Sine.easeOut,
                x: '100%'
            }), 'begin')
    }
}


// Effect 13
export class HoverImgFx13 extends EffectShell {
    setup() {

        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.DOM.reveal.style.zIndex = -1;
        this.totalImages = 3;
        let inner = '';
        for (let i = 0; i <= this.totalImages - 1; ++i) {
            inner += `<div class="hover-reveal__img" style="position: absolute; background-image:url(${this.srcImg})"></div>`;
        }
        this.DOM.reveal.innerHTML = inner;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealImgs = [...this.DOM.reveal.querySelectorAll('.hover-reveal__img')];
    }

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealImgs);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                }
            })
            .set([this.DOM.revealImgs], {
                opacity: 0
            })

        for (let i = 0; i <= this.totalImages - 1; ++i) {
            this.tl.add(new TweenMax(this.DOM.revealImgs[i], 0.7, {
                ease: i === this.totalImages - 1 ? Expo.easeOut : Quint.easeOut,
                startAt: {
                    x: '30%',
                    y: '160%',
                    rotation: i === this.totalImages - 1 ? -30 : -10
                },
                x: i === this.totalImages - 1 ? '10%' : '-15%',
                y: i === this.totalImages - 1 ? '10%' : '-140%',
                rotation: -10
            }), i * 0.2);
            this.tl.add(new TweenMax(this.DOM.revealImgs[i], 0.5, {
                ease: Quad.easeOut,
                startAt: {
                    opacity: 1
                },
                opacity: i === this.totalImages - 1 ? 1 : 0
            }), i * 0.2);
        }
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealImgs);
        this.tl = new TimelineMax({
                onComplete: () => {
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add(new TweenMax(this.DOM.revealImgs[this.totalImages - 1], 0.15, {
                ease: Sine.easeOut,
                x: '-30%',
                y: '-240%',
                opacity: 0
            }))
    }
}

// Effect 14
export class HoverImgFx14 extends EffectShell {
    setup() {
        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        let inner = '';
        const imgsArr = this.DOM.el.dataset.img.split(',');
        for (let i = 0, len = imgsArr.length; i <= len - 1; ++i) {
            inner += `<div class="hover-reveal__img" style="transform-origin:0% 0%;opacity:0;position:absolute;background-image:url(${imgsArr[i]})"></div>`;
        }
        this.DOM.reveal.innerHTML = inner;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealImgs = [...this.DOM.reveal.querySelectorAll('.hover-reveal__img')];
    }


    showImage() {
        this.DOM.reveal.style.opacity = 1;
        TweenMax.set(this.DOM.el, {
            zIndex: 1000
        });
        TweenMax.set(this.DOM.revealImgs, {
            opacity: 0
        });

        const show = () => {
            TweenMax.killTweensOf(this.DOM.revealImgs[this.current]);
            TweenMax.set(this.DOM.revealImgs[this.current], {
                zIndex: 1000
            });
            TweenMax.to(this.DOM.revealImgs[this.current], 0.4, {
                ease: Quint.easeOut,
                startAt: {
                    opacity: 0,
                    scale: 0.5,
                    rotation: -15,
                    x: '0%',
                    y: '-10%'
                },
                opacity: 1,
                y: '0%',
                rotation: 0,
                scale: 1
            });
        };
        this.current = 0;
        show();

        const loop = () => {
            this.imgtimeout = setTimeout(() => {
                this.DOM.revealImgs[this.current].style.zIndex = '';
                TweenMax.to(this.DOM.revealImgs[this.current], 0.8, {
                    ease: Expo.easeOut,
                    x: `${getRandomFloat(-10, 10)}%`,
                    y: `${getRandomFloat(10, 60)}%`,
                    rotation: getRandomFloat(5, 15),
                    opacity: 0
                });
                this.current = this.current < this.imgsTotal - 1 ? this.current + 1 : 0;
                show();
                loop();
            }, 500);
        }
        loop();
    }

    hideImage() {
        clearTimeout(this.imgtimeout);
        this.DOM.revealImgs[this.current].style.zIndex = '';
        this.DOM.revealImgs[this.current].style.opacity = 0;
        this.current = 0;
        TweenMax.set(this.DOM.el, {
            zIndex: ''
        });
        TweenMax.set(this.DOM.reveal, {
            opacity: 0
        })
    }
}


// Effect 15
export class HoverImgFx15 extends EffectShell {
    setup() {

        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.totalImages = 5;
        let inner = '';
        for (let i = 0; i <= this.totalImages - 1; ++i) {
            inner += `<div class="hover-reveal__img" style="position: absolute; background-image:url(${this.srcImg})"></div>`;
        }
        this.DOM.reveal.innerHTML = inner;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealImgs = [...this.DOM.reveal.querySelectorAll('.hover-reveal__img')];
    }

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealImgs);
        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set(this.DOM.revealImgs, {
                opacity: 0
            });

        for (let i = 0; i <= this.totalImages - 1; ++i) {
            TweenMax.set(this.DOM.revealImgs[i], {
                x: `${(this.totalImages - 1 - i) * 5}%`,
                y: `${(this.totalImages - 1 - i) * 10}%`
            });

            this.tl.add(new TweenMax(this.DOM.revealImgs[i], i === this.totalImages - 1 ? 1.2 : 0.55, {
                ease: i === this.totalImages - 1 ? Quint.easeOut : Quad.easeOut,
                startAt: i === this.totalImages - 1 ? {
                    opacity: 1,
                    x: '5%',
                    y: '10%'
                } : {
                    opacity: 1
                },
                opacity: i === this.totalImages - 1 ? 1 : 0,
                x: i === this.totalImages - 1 ? '0%' : null,
                y: i === this.totalImages - 1 ? '0%' : null
            }), i * 0.04);
        }
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealImgs);
        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add(new TweenMax(this.DOM.revealImgs[this.totalImages - 1], 0.15, {
                ease: Sine.easeOut,
                opacity: 0
            }))
    }
}


// Effect 16
export class HoverImgFx16 extends HoverImgFx15 {
    setup() {

        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.totalImages = 10;
        let inner = '';
        for (let i = 0; i <= this.totalImages - 1; ++i) {
            inner += `<div class="hover-reveal__img" style="position: absolute; background-image:url(${this.DOM.el.dataset.img})"></div>`;
        }
        this.DOM.reveal.innerHTML = inner;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealImgs = [...this.DOM.reveal.querySelectorAll('.hover-reveal__img')];
    }

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealImgs);
        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set(this.DOM.revealImgs, {
                opacity: 0,
                transformOrigin: '0% 0%'
            });

        for (let i = 0; i <= this.totalImages - 1; ++i) {
            TweenMax.set(this.DOM.revealImgs[i], {
                x: `${(this.totalImages - 1 - i) * getRandomFloat(-10, -5)}%`,
                y: `${(this.totalImages - 1 - i) * getRandomFloat(-15, -10)}%`,
                rotation: `${getRandomFloat(-5, 5)}deg`
            });

            this.tl.add(new TweenMax(this.DOM.revealImgs[i], i === this.totalImages - 1 ? 0.3 : 0.3, {
                ease: i === this.totalImages - 1 ? Quint.easeOut : Sine.easeOut,
                startAt: i === this.totalImages - 1 ? {
                    opacity: 1,
                    x: '-5%',
                    y: '-10%'
                } : {
                    opacity: 1
                },
                opacity: i === this.totalImages - 1 ? 1 : 0,
                x: i === this.totalImages - 1 ? '0%' : null,
                y: i === this.totalImages - 1 ? '0%' : null,
                rotation: 0
            }), i * 0.02);
        }
    }


}


// Effect 17
export class HoverImgFx17 extends HoverImgFx16 {
    showImage() {
        TweenMax.killTweensOf(this.DOM.revealImgs);
        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set(this.DOM.revealImgs, {
                opacity: 0,
                transformOrigin: '0% 100%'
            });

        for (let i = 0; i <= this.totalImages - 1; ++i) {
            TweenMax.set(this.DOM.revealImgs[i], {
                x: `${(this.totalImages - 1 - i) * 15}%`,
                y: `${(this.totalImages - 1 - i) * -10}%`,
                rotation: `${getRandomFloat(-7, 7)}deg`,
                scale: `${i === this.totalImages - 1 ? 1 : getRandomFloat(0.2, 1)}`,
            });

            this.tl.add(new TweenMax(this.DOM.revealImgs[i], i === this.totalImages - 1 ? 0.8 : 0.55, {
                ease: i === this.totalImages - 1 ? Quint.easeOut : Quad.easeInOut,
                startAt: i === this.totalImages - 1 ? {
                    opacity: 1,
                    x: '5%',
                    y: '-10%'
                } : {
                    opacity: 1
                },
                opacity: i === this.totalImages - 1 ? 1 : 0,
                x: i === this.totalImages - 1 ? '0%' : null,
                y: i === this.totalImages - 1 ? '0%' : null,
                //scale: 1
            }), i * 0.06);
        }
    }


}


// Effect 18
export class HoverImgFx18 extends HoverImgFx16 {
    showImage() {
        TweenMax.killTweensOf(this.DOM.revealImgs);
        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set(this.DOM.revealImgs, {
                opacity: 0
            });

        for (let i = 0; i <= this.totalImages - 1; ++i) {
            TweenMax.set(this.DOM.revealImgs[i], {
                x: `${(this.totalImages - 1 - i) * -50}%`,
                y: `${(this.totalImages - 1 - i) * -getRandomFloat(-2, 2)}%`,
                rotation: `${i !== this.totalImages - 1 ? getRandomFloat(-5, 5) : 0}deg`
            });

            this.tl.add(new TweenMax(this.DOM.revealImgs[i], i === this.totalImages - 1 ? 0.4 : 0.55, {
                ease: i === this.totalImages - 1 ? Back.easeOut : Quad.easeInOut,
                startAt: i === this.totalImages - 1 ? {
                    opacity: 1,
                    x: '-50%',
                    y: '0%'
                } : {
                    opacity: 1
                },
                opacity: i === this.totalImages - 1 ? 1 : 0,
                x: i === this.totalImages - 1 ? '0%' : null,
                y: i === this.totalImages - 1 ? '0%' : null,
            }), i * 0.02);
        }
    }


}


// Effect 19
export class HoverImgFx19 extends HoverImgFx15 {

    setup() {
        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.totalImages = 35;
        let inner = '';
        for (let i = 0; i <= this.totalImages - 1; ++i) {
            inner += `<div class="hover-reveal__img" style="position: absolute; background-image:url(${this.DOM.el.dataset.img})"></div>`;
        }
        this.DOM.reveal.innerHTML = inner;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealImgs = [...this.DOM.reveal.querySelectorAll('.hover-reveal__img')];
    }

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealImgs);
        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set(this.DOM.revealImgs, {
                opacity: 0,
                transformOrigin: '100% 100%'
            });

        for (let i = 0; i <= this.totalImages - 1; ++i) {
            TweenMax.set(this.DOM.revealImgs[i], {
                x: `${(this.totalImages - 1 - i) * -8}%`,
                y: `${(this.totalImages - 1 - i) * -5}%`,
                rotation: `${i !== this.totalImages - 1 ? -1 + 3 * (this.totalImages - i - 1) : 0}deg`,
                scale: `${mapNumber(i, 0, this.totalImages - 1, 0.1, 1)}`
            });

            this.tl.add(new TweenMax(this.DOM.revealImgs[i], i === this.totalImages - 1 ? 0.8 : 0.55, {
                ease: i === this.totalImages - 1 ? Back.easeOut : Quint.easeOut,
                startAt: i === this.totalImages - 1 ? {
                    opacity: 1,
                    x: '-5%',
                    y: '-5%',
                    rotation: -10
                } : {
                    opacity: 1
                },
                opacity: i === this.totalImages - 1 ? 1 : 0,
                x: i === this.totalImages - 1 ? '0%' : null,
                y: i === this.totalImages - 1 ? '0%' : null,
                rotation: i === this.totalImages - 1 ? 0 : null
            }), i * 0.01);
        }
    }


}


// Effect 20
export class HoverImgFx20 extends HoverImgFx15 {

    setup() {
        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.totalImages = 10;
        let inner = '';
        for (let i = 0; i <= this.totalImages - 1; ++i) {
            inner += i === this.totalImages - 1 ? `<div class="hover-reveal__img" style="position: absolute; background-image:url(${this.DOM.el.dataset.img})"></div>` :
                `<div class="hover-reveal__img" style="filter: hue-rotate(60deg) saturate(5); position: absolute; background-image:url(${this.DOM.el.dataset.img})"></div>`;
        }
        this.DOM.reveal.innerHTML = inner;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealImgs = [...this.DOM.reveal.querySelectorAll('.hover-reveal__img')];
    }

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealImgs);
        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set([this.DOM.revealImgs], {
                opacity: 0
            });
        for (let i = 0; i <= this.totalImages - 1; ++i) {
            TweenMax.set(this.DOM.revealImgs[i], {
                x: i === this.totalImages - 1 ? '0%' : `${getRandomFloat(-5, 5)}%`,
                y: i === this.totalImages - 1 ? '0%' : `${getRandomFloat(-5, 5)}%`
            });

            this.tl.add(new TweenMax(this.DOM.revealImgs[i], 0.25, {
                ease: Quad.easeOut,
                startAt: {
                    opacity: 1
                },
                opacity: i === this.totalImages - 1 ? 1 : 0
            }), i * 0.04);
        }
    }


}

// Effect 21
export class HoverImgFx21 extends HoverImgFx15 {

    setup() {
        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.totalImages = 15;
        let inner = '';
        for (let i = 0; i <= this.totalImages - 1; ++i) {
            inner += i === this.totalImages - 1 ? `<div class="hover-reveal__img" style="position: absolute; background-image:url(${this.DOM.el.dataset.img})"></div>` :
                `<div class="hover-reveal__img" style="filter: hue-rotate(90deg) saturate(9); position: absolute; background-image:url(${this.DOM.el.dataset.img})"></div>`;
        }
        this.DOM.reveal.innerHTML = inner;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealImgs = [...this.DOM.reveal.querySelectorAll('.hover-reveal__img')];
    }


    showImage() {
        TweenMax.killTweensOf(this.DOM.revealImgs);
        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .set(this.DOM.revealImgs, {
                opacity: 0
            });

        for (let i = 0; i <= this.totalImages - 1; ++i) {
            TweenMax.set(this.DOM.revealImgs[i], {
                x: `${i !== this.totalImages - 1 ? getRandomFloat(-45, 45) : 0}%`,
                y: `${i !== this.totalImages - 1 ? getRandomFloat(-45, 45) : 0}%`,
                rotation: `${i !== this.totalImages - 1 ? getRandomFloat(-10, 10) : 0}`,
                scale: `${i !== this.totalImages - 1 ? getRandomFloat(0.1, 1.2) : 0.9}`
            });

            this.tl.add(new TweenMax(this.DOM.revealImgs[i], 0.5, {
                ease: Quint.easeOut,
                startAt: i === this.totalImages - 1 ? {
                    opacity: 1,
                    x: '0%',
                    y: '0%'
                } : {
                    opacity: 1
                },
                opacity: i === this.totalImages - 1 ? 1 : 0,
                x: i === this.totalImages - 1 ? '0%' : null,
                y: i === this.totalImages - 1 ? '0%' : null,
                scale: i === this.totalImages - 1 ? 1 : null
            }), i * 0.02);
        }
    }


}

// Effect 21
export class HoverImgFx22 extends EffectShell {


    showImage() {
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {
                        zIndex: 1000
                    });
                }
            })
            .add('begin')
            .set(this.DOM.revealImg, {
                transformOrigin: '95% 50%',
                x: '100%'
            })
            .add(new TweenMax(this.DOM.revealImg, 0.2, {
                ease: Sine.easeOut,
                startAt: {
                    scaleX: 0.5,
                    scaleY: 1
                },
                scaleX: 1.5,
                scaleY: 0.7
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.8, {
                ease: Expo.easeOut,
                startAt: {
                    rotation: 10,
                    y: '5%',
                    opacity: 0
                },
                rotation: 0,
                y: '0%',
                opacity: 1
            }), 'begin')
            .set(this.DOM.revealImg, {
                transformOrigin: '0% 50%'
            })
            .add(new TweenMax(this.DOM.revealImg, 0.6, {
                ease: Expo.easeOut,
                scaleX: 1,
                scaleY: 1,
                opacity: 1
            }), 'begin+=0.2')
            .add(new TweenMax(this.DOM.revealImg, 0.6, {
                ease: Expo.easeOut,
                x: '0%'
            }), 'begin+=0.2')
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: 999
                    });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {
                        zIndex: ''
                    });
                    TweenMax.set(this.DOM.reveal, {
                        opacity: 0
                    });
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealImg, 0.2, {
                ease: Sine.easeOut,
                opacity: 0,
                x: '-20%'
            }), 'begin');
    }


}