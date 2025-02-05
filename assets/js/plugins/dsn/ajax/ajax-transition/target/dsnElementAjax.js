function addElement(container, $e, $target) {
    if ($e === undefined || $e.length <= 0) return false;


    if ($target === undefined || $target.length <= 0) {
        $target = $e;
    }

    const $section = $e.clone();


    $section.css(Object.assign({
            position: "fix",
            display: "block",
            transform: "",
            transition: "",
            objectFit: "cover",
        },
        dsnGrid.getBoundingClientRect($target[0]),
        $e.dsnGridStyleObject()
    ));


    container.append($section);
    return $section;
}

export function dsnCreateElementAjax($e, $target, $letter, $targetLtter, $object = {}) {

    const container = jQuery("<div class=\"dsn-ajax-loader dsn-transition-section background-main\"></div>");
    gsap.set(container, {
        autoAlpha: 0
    });


    const img_move = addElement(container, $e, $target);
    const title_move = addElement(container, $letter, $targetLtter);

    if (img_move || img_move.length)
        img_move.attr('id', 'img_move');

    if (title_move || title_move.length) {
        title_move.attr('id', 'title_move');
        if (!title_move.find("[data-word]").length)
            dsnGrid.spltting.Char(title_move.get(0));
    }

    if ($object.before !== undefined)
        $object.before({
            container,
            title: title_move,
            img: img_move
        });

    $body.append(container);
    return gsap.to(container, 1, {
        autoAlpha: 1,
        ease: "power2.out",
        oncomplete: function() {

            if ($object.after !== undefined)
                $object.after({
                    container,
                    title: title_move,
                    img: img_move
                });


        }
    });


}


export function dsnTransitionElement() {

    const container = jQuery(".dsn-ajax-loader.dsn-transition-section");
    if (!container.length)
        return false;

    const img = jQuery("[data-dsn-ajax=\"img\"]").first(),
        title = jQuery("[data-dsn-ajax=\"title\"]").first();

    if (!img.length && !title.length) {
        return gsap.to(container, {
            autoAlpha: 0,
            ease: "power2.in"
        });
    }

    const title_move = container.find("#title_move"),
        img_move = container.find("#img_move"),
        tl = gsap.timeline();
    tl.add("start");


    if (title_move.length) {

        const tlTitleMove = gsap.timeline();

        if (!title.find("[data-word]").length) dsnGrid.spltting.Char(title.get(0));

        const position = Object.assign({}, {
                top: 0,
                left: 0
            }, title.offset()),
            titleMoveChar = title_move.find("[data-word] .char");

        title_move.css("width", title.outerWidth());

        tl.add(gsap.set(titleMoveChar, {
            x: title_move.offset().left - position.left,
            y: title_move.offset().top - position.top
        }), "start");

        tl.add(gsap.set(title_move, {
            top: position.top,
            left: position.left
        }), "start");


        tlTitleMove
            .to(title_move, 0.4, {
                css: title.dsnGridStyleObject()
            })
            .to(titleMoveChar, {
                y: "0",
                x: "0",
                color: title.css('color'),
                duration: 1,

                stagger: {
                    from: title_move.offset().left < position.left ? "end" : "start",
                    amount: 0.2
                },

                ease: Expo.easeInOut,
            }, 0);

        tl.add(tlTitleMove, "start");

    }

    const position = img.length ? {
        top: img.offset().top,
        left: img.offset().left,
        width: img.width(),
        height: img.height(),
        transform: img.find('.dsn-hero-parallax-img').css("transform"),
    } : {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transform: "none",
    };


    if (img_move.length)
        tl.add(gsap.to(img_move, {
            duration: 0.9,
            top: position.top,
            left: position.left,
            width: position.width,
            height: position.height,
            objectFit: "cover",
            borderRadius: 0,
            ease: Power3.easeInOut(),
            delay: 0.2,
            // ease: Back.easeIn.config(1),
            transform: position.transform,

        }), "start");


    tl.to(container, 0.5, {
        autoAlpha: 0,
        ease: "none"
    });
    tl.fromTo(".metas > span", 0.5, {
        autoAlpha: 0,
        y: -10
    }, {
        autoAlpha: 1,
        y: 0,
        clearProps: true,
        stagger: 0.1
    });


    return tl;
}