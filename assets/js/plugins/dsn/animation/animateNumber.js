import {
    dataAttr
} from "../help";

function htmlToNumber(text) {

    const number = text.match(/\d+/g);
    number.forEach(function($value, $index) {
        text = text.replace(number[$index], '<span class="animate-number" data-dsn-number="::' + ($index + 1) + '">0</span>');
    });
    number.forEach(function($value, $index) {
        text = text.replace('::' + ($index + 1), $value);
    });

    return text
}


function animateNumber($el = jQuery(document)) {

    $el.find('.dsn-animate-number').each(function() {
        const $this = jQuery(this);
        $this.html(htmlToNumber($this.html()));

        $this.find('[data-dsn-number]').each(function() {
            gsap.effects.animateNumber(this, {
                textContent: dataAttr(this, 'number') || 0,
                onComplete: function() {
                    if (!this.vars.scrollTrigger.scrub) {
                        this.scrollTrigger.kill();
                        this.kill();
                    }
                }
            });

        });

    });
}

export default animateNumber;