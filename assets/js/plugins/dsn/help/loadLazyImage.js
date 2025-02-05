import dataAttr, {
    removeAttr
} from './dataAttr';

function loadLazyImage($target, $type, $args = {}) {
    if (!$target) return;

    const srcset = dataAttr($target, 'srcset');
    const newImg = new Image;
    const {
        onComplete
    } = $args;

    $target.classList.add("dsn-lazy-loading");
    newImg.src = $target.getAttribute('data-dsn-' + $type);

    if (srcset)
        newImg.srcset = srcset;

    newImg.onload = function() {
        removeAttr($target, $type);
        switch ($type) {

            case 'bg':
                $target.style.backgroundImage = "url(" + this.src + ")"
                break;
            case 'src':
                $target.setAttribute('src', this.src);
                $target.setAttribute('srcset', this.srcset);
                break;
            default:
                $target.setAttribute($type, dataAttr($target, $type));

        }
        $target.classList.remove("dsn-lazy-loading");
        this.remove();


        if (typeof onComplete === "function")
            onComplete($target);

    }

}


export default loadLazyImage;