function scrollTop(element, $option = {}) {


    let offset = 0;
    if (element === "end")
        offset = document.body.scrollHeight;
    else if ((typeof element) === "number") {
        offset = element;
    } else if (element) {
        offset = element ? .offsetTop;
    }


    if (offset === null || offset === undefined)
        return;


    $option = Object.assign({
        offset: -100
    }, $option);

    const plusOffset = $option.offset || -100;
    delete $option['offset'];

    gsap.to(window ? .Scrollbar ? .get(document.querySelector("#dsn-scrollbar")) || $wind, {
        scrollTo: {
            y: offset + (plusOffset || 0)
        },
        ...$option
    });

}


export default scrollTop;