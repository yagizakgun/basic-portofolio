const navbar = document.querySelector('nav');

function animation() {
    var controller = new ScrollMagic.Controller();
    const t1 = gsap.timeline({ defaluts: { ease: Expo.InOut } });

    t1.fromTo(navbar, 1, { y: "-10rem" }, { y: 0 });
    t1.fromTo(".hero-area",
        0.5,
        { x: "-2rem", opacity: 0 },
        { x: 0, opacity: 1 },
        "-=1");

    // About Section Anim
    const t2 = gsap.timeline({ defaluts: { ease: Expo.InOut } });

    t2.fromTo(".sub-section", .5, { x: "-2rem", opacity: 0 }, { x: 0, opacity: 1 })

    new ScrollMagic.Scene({
        triggerElement: ".sub-section",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(t2)
        .addTo(controller);

    // Projects anim
    const t3 = gsap.timeline({ defaluts: { ease: Expo.InOut } });
    t3.fromTo(
        ".sub-section-alternative",
        1,
        { y: "-3rem", opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3 }
    );
    t3.set(".sub-section-alternative", { clearProps: "all" });

    new ScrollMagic.Scene({
        triggerElement: ".sub-section-alternative",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(t3)
        .addTo(controller);
}

animation();