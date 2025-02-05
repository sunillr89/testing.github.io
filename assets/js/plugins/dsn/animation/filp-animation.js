import {
    preloadImages,
    getMousePos,
    lerp
} from './utils.js';
import dataAttr from "../help/dataAttr";
import {
    killAjax
} from "../useEffect";


export default function flipAnimation($el = jQuery(document)) {
    $el.find('.dsn-flip-animation').each(function() {

        const gridRows = this.querySelectorAll('.grid .row');


        if (!gridRows.length)
            return

        const winSize = {
                width: window.innerWidth,
                height: window.innerHeight
            },
            mousePos = {
                x: winSize.width / 2,
                y: winSize.height / 2
            },
            numRows = gridRows.length,
            middleRowIndex = Math.floor(numRows / 2),
            middleRow = gridRows[middleRowIndex],
            middleRowItems = gridRows[middleRowIndex].querySelectorAll('.row__item');

        const numRowItems = middleRowItems.length; // Number of items in the middle row
        const middleRowItemIndex = Math.floor(numRowItems / 2); // Index of the middle item in the middle row
        const middleRowItemInner = middleRowItems[middleRowItemIndex].querySelector('.row__item-inner');
        const middleRowItemInnerImage = middleRowItemInner.querySelector('.row__item-img');


        const {
            translate = true,
                skew = true,
                contrast = true,
                scale = false,
                brightness = true,
                speed = 30
        } = dataAttr(this, "option") || {};



        const config = {
            translateX: translate,
            skewX: skew,
            contrast: contrast,
            scale: scale,
            brightness: brightness
        };

        // Setting the final size of the middle image for the reveal effect
        middleRowItemInnerImage.classList.add('row__item-img--large');

        const {
            baseAmt,
            minAmt,
            maxAmt
        } = {
            baseAmt: 0.1,
            minAmt: 0.05,
            maxAmt: 0.1
        };

        // Initialize rendered styles for each row with dynamically calculated amt values
        const renderedStyles = Array.from({
            length: numRows
        }, function(v, index) {

            const distanceFromMiddle = Math.abs(index - middleRowIndex);

            let style = {
                amt: Math.max(baseAmt - distanceFromMiddle * 0.03, minAmt), // Calculate amt dynamically based on the distance from the middle row
                scaleAmt: Math.min(baseAmt + distanceFromMiddle * 0.03, maxAmt) // Inverted amt for scale: outermost rows are faster
            };

            if (config.translateX) style.translateX = {
                previous: 0,
                current: 0
            };
            if (config.skewX) style.skewX = {
                previous: 0,
                current: 0
            };
            if (config.contrast) style.contrast = {
                previous: 100,
                current: 100
            };
            if (config.scale) style.scale = {
                previous: 1,
                current: 1
            };
            if (config.brightness) style.brightness = {
                previous: 100,
                current: 100
            };

            return style;
        });

        let requestId;

        function eventResize() {
            winSize.width = window.innerWidth;
            winSize.height = window.innerHeight;
        }

        /**
         *  Update mouse position
         * @param ev
         */
        function updateMousePosition(ev) {
            const {
                x,
                y
            } = getMousePos(ev);
            mousePos.x = x;
            mousePos.y = y;
        }

        /**
         * Map mouse position to translation range
         * @returns {number}
         */
        function calculateMappedX() {
            return ((mousePos.x / winSize.width) * 2 - 1) * speed * winSize.width / 100;
        }


        function calculateMappedSkew() {
            return ((mousePos.x / winSize.width) * 2 - 1) * 3;
        }


        /**
         * Map mouse position to contrast range (100 at center to 125 at edges)
         * @returns {number}
         */
        const calculateMappedContrast = () => {
            const centerContrast = 100;
            const edgeContrast = 330;
            const t = Math.abs((mousePos.x / winSize.width) * 2 - 1);
            const factor = Math.pow(t, 2); // Quadratic factor for non-linear mapping
            return centerContrast - factor * (centerContrast - edgeContrast);
        };


        /**
         * Map mouse position to scale range (1 at center to 0.95 at edges)
         * @returns {number}
         */
        const calculateMappedScale = () => {
            const centerScale = 1;
            const edgeScale = 0.95;
            return centerScale - Math.abs((mousePos.x / winSize.width) * 2 - 1) * (centerScale - edgeScale);
        };


        /**
         * Map mouse position to brightness range (100 at center to 15 at edges)
         * @returns {number}
         */
        const calculateMappedBrightness = () => {
            const centerBrightness = 100;
            const edgeBrightness = 15;
            const t = Math.abs((mousePos.x / winSize.width) * 2 - 1);
            const factor = Math.pow(t, 2); // Quadratic factor for non-linear mapping
            return centerBrightness - factor * (centerBrightness - edgeBrightness);
        };


        /**
         * Render the current frame
         */
        const render = () => {
            const mappedValues = {
                translateX: calculateMappedX(),
                skewX: calculateMappedSkew(),
                contrast: calculateMappedContrast(),
                scale: calculateMappedScale(),
                brightness: calculateMappedBrightness()
            };

            // Calculate and set the translation for each row
            gridRows.forEach((row, index) => {
                const style = renderedStyles[index];

                // Update current positions and interpolate values
                for (let prop in config) {
                    if (config[prop]) {
                        style[prop].current = mappedValues[prop];
                        const amt = prop === 'scale' ? style.scaleAmt : style.amt;
                        style[prop].previous = lerp(style[prop].previous, style[prop].current, amt);
                    }
                }

                // Apply the interpolated values
                let gsapSettings = {};
                if (config.translateX) gsapSettings.x = style.translateX.previous;
                if (config.skewX) gsapSettings.skewX = style.skewX.previous;
                if (config.scale) gsapSettings.scale = style.scale.previous;
                if (config.contrast) gsapSettings.filter = `contrast(${style.contrast.previous}%)`;
                if (config.brightness) gsapSettings.filter = `${gsapSettings.filter ? gsapSettings.filter + ' ' : ''}brightness(${style.brightness.previous}%)`;

                gsap.set(row, gsapSettings);
            });

            // Continue the render loop
            requestId = requestAnimationFrame(render);
        };

        /**
         *  Start the render loop
         */
        const startRendering = () => {
            if (!requestId) {
                render();
            }
        };


        function touchmove(ev) {
            updateMousePosition(ev.touches[0]);
            console.log(ev.touches[0])
        }

        preloadImages('.row__item-img').then(() => {
            document.body.classList.remove('loading');
            startRendering();
        });

        /**
         * Events
         */
        window.addEventListener('resize', eventResize);
        // Mouse movement event listener to update mouse position
        this.addEventListener('mousemove', updateMousePosition);
        this.addEventListener('touchmove', touchmove);

        killAjax(() => {
            /**
             * Events
             */
            window.removeEventListener('resize', eventResize);
            // Mouse movement event listener to update mouse position
            this.removeEventListener('mousemove', updateMousePosition);
            this.removeEventListener('touchmove', touchmove);
        })






    });
}