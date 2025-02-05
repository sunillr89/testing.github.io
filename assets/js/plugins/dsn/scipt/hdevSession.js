export default function hdevSession() {

    const themeName = "mestc-html-";
    const COLOR = "color";
    const SCROLL = "scroll";

    /**
     *    Stores data in the session.
     * @param key    Name of the data.
     * @param value    Your data.
     *
     * @return    void
     **/
    this.put = (key, value) => {
        sessionStorage.setItem(themeName + key, value);
    }

    this.putColor = (value) => {
        this.put(COLOR, value);

    }
    this.putScroll = (value) => {
        this.put(SCROLL, value);
    }


    /**
     *    Gets data from the session.
     *
     * @param key    Name of the data to get.
     * @param $default    default value.
     *
     * @return    mixed    Data stored in session.
     **/
    this.get = (key, $default) => {
        const val = sessionStorage.getItem(themeName + key);
        if (val)
            return val;

        return $default;
    }

    this.getColor = ($default) => {
        return this.get(COLOR, $default);
    }
    this.getScroll = ($default) => {
        return this.get(SCROLL, $default);
    }

    this.remove = (key) => {
        sessionStorage.removeItem(themeName + key);
    }


}