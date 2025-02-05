/**
 *
 * @param $target
 * @param $data
 * @param $defaul
 */
function dataAttr($target, $data, $defaul = false) {

    if ($target instanceof jQuery)
        $target = $target.get(0)

    if (!$target)
        return;

    const out = $target.getAttribute('data-dsn-' + $data);
    removeAttr($target, $data);

    try {
        return JSON.parse(out);
    } catch (e) {
        if (out)
            return out;
        else
            return $defaul
    }
}

/**
 *
 * @param $target
 * @param $data
 */
export function removeAttr($target, $data) {

    if (!$target)
        return;

    $target.removeAttribute('data-dsn-' + $data);


}


export default dataAttr;