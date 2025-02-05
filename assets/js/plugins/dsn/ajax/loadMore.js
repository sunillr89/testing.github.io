import dataAttr from '../help/dataAttr'


export function getOptionAjax(el) {
    const $option = dataAttr(el, 'option') || {};
    $option.attr = dataAttr(el, 'attr') || {};
    if (!Object.keys($option).length)
        return {};

    $option.mestc_csrf = dsnParam.dsn_csrf || false;

    return $option;
}

/**
 *
 * @param el HTMLElement
 * @param option Object
 * @param isotope Isotope
 */
function loadMore({
    el,
    option,
    isotope: data_iso,
    filtering: posts_filter,
    posts,
    success
}) {
    if (!el)
        return;

    el.on('click', function(e) {
        e.preventDefault();
        option.paged = option.paged + 1;
        if (isNaN(option.paged))
            return;



        jQuery.ajax({
            url: dsnParam.queries,
            type: "post",
            data: option,
            beforeSend: function() {
                el.addClass("dsn-loading border-style");
            },
            success: function(data) {


                if (!data.status) return;


                if (data_iso) {

                    data_iso.isotope("insert", jQuery.parseHTML(data.html));
                    if (posts_filter.length) {

                        jQuery.each(data.filter_array, function($key, $value) {
                            if (!posts_filter.find('.dsn-filter-category-' + $key).length) {
                                const $button = jQuery(`<button type="button" class="sm-title-block dsn-filter-category-${$key}" data-filter=".${$key} , .category-${$key}">${$value}</button>`);

                                $button.on('click', function() {
                                    jQuery(this).addClass('active').siblings().removeClass("active");
                                    data_iso.isotope({
                                        filter: jQuery(this).attr("data-filter"),
                                    });
                                });
                                posts_filter.append($button);
                            }
                        });
                    }
                } else posts.append(data.html);
                el.removeClass("dsn-loading");
                el.removeClass("border-style");
                if (!data.has_next) {
                    el.off("click");
                    el.find('span:not(.progress-no-more)').hide();
                    el.find('.progress-no-more').show();
                }

                if (success !== undefined)
                    success(data);
            },

            error: function(error) {
                console.log(error);
            },
            xhr: function() {

                // get the native XmlHttpRequest object
                const xhr = jQuery.ajaxSettings.xhr();

                // set the onprogress event handler
                xhr.upload.onprogress = function(e) {
                    if (e.lengthComputable) {
                        let p = e.loaded / e.total * 100;
                        gsap.to(el.find('.icon-circle'), {
                            width: p + "%",
                            onUpdate: function() {
                                el.find('.dsn-load-progress-ajax').text(Math.floor(this.progress() * 100) + "%");
                            }
                        })
                    }
                };

                // return the customized object
                return xhr;

            },

        });

    });

}

export default loadMore;