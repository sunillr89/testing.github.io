import convertToJQuery from "../help/convertToJQuery";


function effectSwiper($obj) {

    let progressStart = 0;
    let start = false;


    $obj.swiper.on("progress", (s) => {

        if (!start)
            return;


        if (progressStart < s.progress)
            this.mat.uniforms.effectFactor.value = $obj.intensity * -1;
        else if (progressStart > s.progress)
            this.mat.uniforms.effectFactor.value = $obj.intensity;


        const progress = s.slides[s.activeIndex].progress,
            charOpacity = 1 - Math.min(Math.abs(progress), 1);

        gsap.set(this.mat.uniforms.dispFactor, {
            value: charOpacity,
            ease: "none",
        });

        this.animate();

    });


    $obj.swiper.on("touchStart", (swiper) => {
        start = true;
        progressStart = swiper.progress;
    });
    $obj.swiper.on("touchEnd", () => {
        start = false;
        gsap.to(this.mat.uniforms.dispFactor, $obj.speedIn, {
            value: 1,
            ease: $obj.easing,
            onUpdate: () => {
                this.animate();


                if ($obj.onUpdate !== undefined) {
                    $obj.onUpdate.bind(this)();
                }
            }
        });
    });
}


/**
 *
 *
 * @param $obj
 * @returns {hoverEffect}
 */
const hoverEffect = function($obj) {
    const vertex = `
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
        parent = $obj.parent || console.warn("no parent"),
        dispImage = $obj.displacement || console.warn("displacement image missing"),
        $this = this,
        nextEl = convertToJQuery($obj.nextEl),
        prevEl = convertToJQuery($obj.prevEl);

    var allImgs = [],
        running = false,
        loded = false,
        disp, oldIndex = 0,
        current = 0;


    parent.classList.add("three-js-loader", "bg-three-js");


    $obj = jQuery.extend(true, {
        imgs: [],
        intensity: 1,
        speedIn: 1.6,
        speedOut: 1.2,
        hover: false,
        easing: Expo.easeOut,
    }, $obj);


    const {
        imgs: images
    } = $obj;

    this.scene = new THREE.Scene();
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    if ($obj.swiper) {
        effectSwiper.bind(this)($obj);
        $obj.swiper.dsnOnChange = (activeIndex, oldIndex) => {
            this.changeTo(activeIndex, oldIndex);
        }
    }


    const getRenderer = async () => {

        this.ratio = window.devicePixelRatio;
        this.video = false;

        return new THREE.WebGLRenderer({
            canvas: this.canvas,
            powerPreference: "high-performance",
            antialias: false,
            alpha: true

        });

    }

    const video = (src, poster, $index) => {

        let dImg = new THREE.VideoTexture(src);
        dImg.magFilter = THREE.LinearFilter;
        dImg.minFilter = THREE.LinearFilter;
        dImg.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
        dImg.dsn_video = jQuery("<img src='" + poster + "' />").get(0);

        allImgs[$index] = dImg;


    }

    const image = (src, $index) => {
        const dImg = this.loader.load(src);
        dImg.magFilter = THREE.LinearFilter;
        dImg.minFilter = THREE.LinearFilter;
        dImg.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
        allImgs[$index] = dImg;

    }

    getRenderer()
        .then((renderer) => {
            this.renderer = renderer;
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setClearColor(0xffffff, 0.0);
            this.renderer.setSize(this.width, this.height);
            this.width = parent.offsetWidth;
            this.height = parent.offsetHeight;
            parent.appendChild(this.renderer.domElement);

            return this.renderer;
        })
        .then(() => {
            this.camera = new THREE.PerspectiveCamera(
                70,
                window.innerWidth / window.innerHeight,
                0.001,
                1000
            );
            this.camera.position.set(0, 0, 2);
        })
        .then(() => {
            this.manager = new THREE.LoadingManager();
        })
        .then(() => {
            this.loader = new THREE.TextureLoader(this.manager);
            disp = this.loader.load(dispImage);
            disp.wrapS = disp.wrapT = THREE.RepeatWrapping;
            $obj.imgs.forEach(({
                src,
                poster = false
            }, x) => {
                if (poster)
                    video(src, poster, x);
                else
                    image(src, x);
            })


        })
        .then(() => {
            this.mat = new THREE.ShaderMaterial({
                extensions: {
                    derivatives: "#extension GL_OES_standard_derivatives : enable"
                },
                side: THREE.DoubleSide,

                uniforms: {
                    effectFactor: {
                        type: "f",
                        value: $obj.intensity
                    },
                    dispFactor: {
                        type: "f",
                        value: 0
                    },
                    texture: {
                        type: "t",
                        value: allImgs[0]
                    },
                    texture2: {
                        type: "t",
                        value: allImgs[0]
                    },
                    disp: {
                        type: "t",
                        value: disp
                    },
                    resolution: {
                        type: "v4",
                        value: new THREE.Vector4()
                    },
                },
                vertexShader: vertex,
                fragmentShader: getFragment(),
                transparent: true,
                opacity: 1.0,
            });
        })
        .then(() => {
            this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
            this.plane = new THREE.Mesh(this.geometry, this.mat);
        })
        .then(() => {
            this.scene.add(this.plane);
        })
        .then(() => {
            this.animate = function() {
                if (!this.video && !this.destroyed)
                    this.renderer.render(this.scene, this.camera);

            };


            const load = () => {
                requestAnimationFrame(load);
                if (this.video)
                    this.renderer.render(this.scene, this.camera);
            }


            this.manager.onLoad = () => {
                jQuery(parent).removeClass("three-js-loader");
                loded = true;
                if (this.destroyed) {
                    this.destroy();
                    return;
                }


                resize();
                window.addEventListener("resize", resize);

                $obj.onComplete && $obj.onComplete.bind(this)();


                // load();
            };
        })
        .then(() => {
            if (nextEl.length)
                nextEl.on("click", function() {
                    $this.next();
                });
            if (prevEl.length)
                prevEl.on("click", function() {
                    $this.prev();
                });

        });


    const resize = () => {

        let image = allImgs[current].image;
        if (allImgs[current].dsn_video) {
            image = allImgs[current].dsn_video;
            this.video = true;
        } else {
            this.video = false;

        }


        this.width = parent.offsetWidth;
        this.height = parent.offsetHeight;

        this.renderer.setSize(this.width, this.height);

        this.camera.aspect = this.width / this.height;


        this.imageAspect = image.height / image.width;


        let a1;
        let a2;
        if (this.height / this.width > this.imageAspect) {
            a1 = (this.width / this.height) * this.imageAspect;
            a2 = 1;
        } else {
            a1 = 1;
            a2 = (this.height / this.width) / this.imageAspect;
        }

        const dist = this.camera.position.z;
        const height = 1;
        this.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));

        this.plane.scale.x = this.camera.aspect;
        this.plane.scale.y = 1;

        gsap.to(this.mat.uniforms.resolution.value, 0.1, {
            x: this.width,
            y: this.height,
            z: a1,
            w: a2,
            // delay: 0.5,
            yoyo: true,
            onUpdate: function() {
                this.camera.updateProjectionMatrix();
                this.animate();
            }.bind(this),
            ease: 'none'
        })

    }

    function getFragment() {


        let dir = "";
        if ($obj.direction !== "horizontal") {
            dir = `vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));
					vec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));`;
        } else {
            dir = ` vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
            vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

            `;
        }

        return `
        varying vec2 vUv;

        uniform sampler2D texture;
        uniform sampler2D texture2;
        uniform sampler2D disp;

        uniform float dispFactor;
        uniform float effectFactor;
		uniform vec4 resolution;



        void main() {

            vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
            

            vec4 disp = texture2D(disp, uv);

            ${dir}

            vec4 _texture = texture2D(texture, distortedPosition);
            vec4 _texture2 = texture2D(texture2, distortedPosition2);

            vec4 finalTexture = mix(_texture, _texture2, dispFactor);

            gl_FragColor = finalTexture;

        }
    `;
    }

    function onStart(current, oldIndex) {
        running = true;
        if ($obj.onStart !== undefined) {
            $obj.onStart.bind(this)({
                parent,
                item: images[current],
                activeIndex: current,
                oldIndex
            });
        }
        resize();

    }

    function onUpdate() {
        this.animate();
        if ($obj.onUpdate !== undefined) {
            $obj.onUpdate.bind(this)();
        }
    }

    function onEnd() {
        running = false;
        if ($obj.onEnd !== undefined) {
            $obj.onEnd.bind(this)(allImgs[current], current, oldIndex);
        }


    }

    this.destroy = () => {
        this.destroyed = true;


        window.removeEventListener("resize", resize);

        this.renderer.forceContextLoss();
        this.renderer.dispose();
        this.renderer = null;

        this.manager = null;
        this.video = null;


        this.geometry.dispose();
        this.geometry = null;

        this.mat.dispose();
        this.mat = null;


        this.plane = null;

        this.loader = null;
        this.ratio = null;
        this.scene.dispose();
        this.scene = null;

        this.width = this.height = this.changeTo = this.next = this.prev, this.imageAspect = null;

    }

    this.next = function() {
        if (this.renderer === undefined || running) return;
        this.mat.uniforms.effectFactor.value = $obj.intensity;
        oldIndex = current;
        current = (current + 1) % allImgs.length;
        this.changeTo(current);
    };
    this.prev = function() {
        if (this.renderer === undefined || running) return;
        this.mat.uniforms.effectFactor.value = $obj.intensity * -1;
        oldIndex = current;

        current = current === 0 ? allImgs.length - 1 : Math.abs((current - 1) % allImgs.length);
        this.changeTo(current);
    };

    this.changeTo = function($index, $oldIndex) {
        current = $index;
        oldIndex = $oldIndex;

        if ($index > $oldIndex)
            this.mat.uniforms.effectFactor.value = $obj.intensity;
        else
            this.mat.uniforms.effectFactor.value = $obj.intensity * -1;

        this.mat.uniforms.texture.value = allImgs[oldIndex];
        this.mat.uniforms.texture2.value = allImgs[$index];
        gsap.fromTo(this.mat.uniforms.dispFactor, $obj.speedIn, {
            value: 0
        }, {
            value: 1,
            ease: $obj.easing,
            onStart: onStart.bind(this, current, oldIndex),
            onUpdate: onUpdate.bind(this, current, oldIndex),
            onComplete: onEnd.bind(this, current, oldIndex),
        });
    };


}


const WebGLDistortionHoverEffects = function($ob) {

    if ($ob.parent && !$ob.imgs.length) return false;
    return new hoverEffect($ob);
}

export default WebGLDistortionHoverEffects;