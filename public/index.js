'use strict';

(function() {
    window.addEventListener('load', init);

    const LOGOS = ['img/logos/aruw.png', 'img/logos/rmna.webp'];

    const id = document.getElementById.bind(document);
    const qs = document.querySelector.bind(document);

    let curLogo = 0;

    function init() {
        setInterval(changeImage, 10000);
    }


    function changeImage() {
        curLogo = ++curLogo % LOGOS.length;
        const img = qs('#l3-bug img');
        img.classList.add('a-fadeout');
        setTimeout(() => {
            img.src = LOGOS[curLogo];
            img.classList.remove('a-fadeout');
        }, 510);
    }
})();
