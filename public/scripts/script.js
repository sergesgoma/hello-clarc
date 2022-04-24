$(document).ready(function () {

    // var rotate = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#recycle-banner",
    //         pin: true,
    //         scrub: 0.2,
    //         start: 'top top',
    //         end: '+=10000',
    //     }
    // })
    //     .to('#recycle-banner img', {
    //         rotation: 360 * 5,
    //         duration: 1, ease: 'none',
    //     })

    // gsap.to("#recycle-banner img", {
    //     rotation: 360,
    //     scale: 1,
    //     opacity: 1,
    //     webkitFilter: "blur(" + 0 + "px)",
    //     scrollTrigger: {
    //         trigger: "#recycle-banner",
    //         toggleActions: 'play none none reset',
    //         start: "0% 25%",
    //         // end: "+=100px",
    //         markers: true,
    //         scrub: 1,
    //     }
    // }
    // )


    gsap.to("#recycle-banner h2", {
        scrollTrigger: {
            trigger: "#recycle-banner",
            start: 'top 55%',
            toggleActions: 'play none none reverse',
            ease: Power3.easeOut
        },
        scale: 1,
        opacity: 1,
        webkitFilter: "blur(" + 0 + "px)",
    })

    gsap.to("#recycle-banner img", {
        scrollTrigger: {
            trigger: "#recycle-banner",
            start: 'top 50%',
            toggleActions: 'play none none reverse',
            ease: Power3.easeOut
            // markers: true,
        },
        rotation: 360,
        scale: 1,
        opacity: 1,
        webkitFilter: "blur(" + 0 + "px)",
    })

    var blocWidth = $('#carroussel')[0].scrollWidth - ($('#carroussel .item')[0].scrollWidth);

    gsap.to("#carroussel", {
        x: -blocWidth,
        duration: 30,
        scrollTrigger: {
            trigger: "#carroussel .item",
            start: "0% 25%",
            end: "+=" + blocWidth,
            //markers: true,
            scrub: 1,
            pin: "#centralize",
        }
    }
    )

    gsap.to("#infos .item-1 .parallax-img img", {
        y: -100,
        duration: 1,
        scrollTrigger: {
            trigger: "#infos .item-1 .parallax-img",
            start: "top 100%",
            end: "bottom 0%",
            scrub: 0,
        }
    }
    )
    gsap.to("#infos .item-2 .parallax-img img", {
        y: -100,
        duration: 1,
        scrollTrigger: {
            trigger: "#infos .item-2 .parallax-img",
            start: "top 100%",
            end: "bottom 0%",
            scrub: 0,
        }
    }
    )
    gsap.to("#infos .item-3 .parallax-img img", {
        y: -100,
        duration: 1,
        scrollTrigger: {
            trigger: "#infos .item-3 .parallax-img",
            start: "top 100%",
            end: "bottom 0%",
            scrub: 0,
        }
    }
    )
});



