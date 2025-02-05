export function setTitle(data) {
    const title = data.match(/<title[^>]*>(.+)<\/title>/);
    if (title)
        jQuery("head title").html(title[1]);

}

export function setBodyClass(data) {
    const cls = data.match(/<body[^>]*class="(.+)">/);
    if (cls)
        $body.attr("class", cls[1]);
}


export async function updateScripts(data) {


    await $body.find("script:not([src])").each(function() {
        if (jQuery(this).text().search(/elementorFrontendConfig/) > -1 || jQuery(this).text().search(/ElementorProFrontendConfig/) > -1 || jQuery(this).text().search(/wcSettings/) > -1) {
            jQuery(this).remove();
        }
    });

    await jQuery(data).filter("script:not([src])").each(function() {
        if (jQuery(this).text().search(/elementorFrontendConfig/) > -1 || jQuery(this).text().search(/ElementorProFrontendConfig/) > -1 || jQuery(this).text().search(/wcSettings/) > -1) {
            $body.append(jQuery(this));
        }
    });


    await jQuery(data).filter("script[src*=\"plugins/elementor\"],script[src*=\"plugins/woocommerce\"], script[src*=\"plugins/blackdsn\"]").each(function() {

        if (!$body.find("script[src=\"" + jQuery(this).attr("src") + "\"]").length) {
            $body.append(jQuery(this));
        }
    });
    await jQuery(data).filter("link[src*=\"elementor\"]").each(function() {
        if (!$body.find("link[src=\"" + jQuery(this).attr("src") + "\"]").length) {
            $body.append(jQuery(this));
        }
    });


    /**
     * Style Sheet
     * @type {string}
     */
    const tags = [
            //--> meta
            'meta[name="keywords"]',
            'meta[name="description"]',
            'meta[property^="og"]',
            'meta[name^="twitter"]',
            "meta[itemprop]",
            //--> link seo
            "link[itemprop]",
            'link[rel="prev"]',
            'link[rel="next"]',
            'link[rel="canonical"]',
            'link[rel="alternate"]',
            'link[rel="shortlink"]',
            //--> link style
            'link[id*="elementor"]',
            'link[href*="plugins/blackdsn"]',

            'link[id*="wp-block"]',
            'link[id*="google-fonts"]',
            'link[id*="eael"]', // Essential Addons for Elementor
            //--> style
            'style[id*="elementor"]',
            'style[id*="eael"]', // Essential Addons for Elementor
            '#swiper-css'

        ].join(','),
        oldPageHead = jQuery('head'),
        newPageHead = jQuery('<head></head>').html(data.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]),
        olds = oldPageHead.find(tags), //--> old tags
        newts = newPageHead.find(tags); //--> new tags


    await oldPageHead.prepend(newts);

    await jQuery(data).filter("link[href*=\"plugins/blackdsn\"]").each(function() {
        if (!oldPageHead.find("link[href=\"" + jQuery(this).attr("src") + "\"]").length) {
            oldPageHead.append(jQuery(this));
        }
    });


    await olds.remove();

    return oldPageHead.find('link[id*="elementor"]');
}


export function updateElement(data, $el) {
    const up = jQuery(data).filter($el);
    if (up.length)
        jQuery($el).replaceWith(up);
}

export function updateDashAdmin(data) {
    updateElement(data, '#wpadminbar');
}


async function action(html) {


    await setTitle(html);
    await setBodyClass(html);
    await updateDashAdmin(html);
    return updateScripts(html);

}

export function initPlugins() {

    return new Promise(function(resolve, reject) {
        resolve(jQuery(".wpcf7-form"))
    }).then(function(cf7Form) {

        if ((typeof wpcf7 !== "undefined") && cf7Form.length) {
            cf7Form.each(function() {
                wpcf7.init(this);
            });
        }
        return cf7Form;
    }).then(function(cf7Form) {

        if (typeof wpcf7cf !== 'undefined' && cf7Form.length) {
            cf7Form.each(function() {
                wpcf7cf.initForm(jQuery(this));
            });
        }
    }).then(function() {
        if (typeof window.elementorFrontend !== "undefined") {
            elementorFrontend.init();
        }
    })

}

function initAjax(data) {
    return new Promise(function(resolve) {
        return action(data)
            .then((data) => resolve(data)).catch((e) => console.log(e));
    });

}

export default initAjax;