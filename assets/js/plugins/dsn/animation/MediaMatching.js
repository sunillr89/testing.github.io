function mediaMatching($p1, $p2 = null, $p3 = null) {

    if (typeof $p1 === "object")
        $dsnEffect.matchMedia.add($p1, $p2, $p3);
    else
        $dsnEffect.matchMedia.add({
            isDesktop: "(min-width: 992px)",
            isTablet: "(min-width: 768px) and (max-width: 991px)",
            isMobile: "(max-width: 767px)"
        }, $p1, $p2);


    return $dsnEffect.matchMedia;

}


export default mediaMatching;