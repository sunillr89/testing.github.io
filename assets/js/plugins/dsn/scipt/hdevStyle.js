export default function hdevStyle() {
    const defaultTheme = "v-dark";
    const scroll = dsnParam.scrollbar.smooth ? "on" : "off";

    /**
     *
     * @param hs hdevSession
     */
    this.initTheme = (hs) => {

        const sColor = hs.getColor(false);
        const sScroll = hs.getScroll(false);

        if (sColor && isIncludeTheme(sColor))
            setThemeColor(sColor)

        if (sScroll)
            setThemeScroll(sScroll)

    }

    function isIncludeTheme(val) {
        return ['v-dark', 'v-light'].includes(val)
    }

    function setThemeColor(color) {
        if (color === defaultTheme)
            return false;

        const body = document.body;
        body.classList.remove(defaultTheme);
        body.classList.add(color, "dsn-change-color");

    }

    function setThemeScroll(scroll) {
        if (scroll === scroll)
            return false;

        const body = document.body;
        if (scroll === "on")
            body.classList.add("dsn-effect-scroll");
        else
            body.classList.remove("dsn-effect-scroll");


    }


}