export const mapNumber = (X, A, B, C, D) => (X - A) * (D - C) / (B - A) + C;
// from http://www.quirksmode.org/js/events_properties.html#position
export const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;


    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return {
        x: posx,
        y: posy
    }
}
// Generate a random float.
export const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);