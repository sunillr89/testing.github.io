function convertToJQuery($element) {

    if (($element instanceof jQuery) === false) {

        return jQuery($element);

    }

    return $element;

}

export default convertToJQuery;