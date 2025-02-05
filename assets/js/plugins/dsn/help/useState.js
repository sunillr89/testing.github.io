function useState($init = null, changeValue = null) {
    function Target() {
        const value = {
            current: $init
        };

        this.setValue = function(val) {
            if (typeof this.onChange === "function")
                this.onChange.bind(this)(val, value.current);
            value.current = val;
        }.bind(this);

        this.getValue = function() {
            return value.current;
        }

        this.onChange = changeValue;
    }


    return new Target($init);
}

export default useState;