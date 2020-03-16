window.addEventListener('load', () => {
    document.querySelector('#upArrow').style.display = 'none';
})

window.addEventListener('scroll', () => {
    var start = document.querySelector('.home_header, .default_header').offsetHeight,
        pad = document.querySelector('.panel_pad'),
        padHeight = document.querySelector('.panel_container').offsetHeight,
        // not current pad height, but it supposed to be
        body = document.body,
        html = document.documentElement,
        scrollTop = Math.max(body.scrollTop, html.scrollTop),
        seen = scrollTop + window.innerHeight, // scroll bottom
        pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.scrollHeight, html.offsetHeight),
        square = pageHeight / 10,
        numberOfSquares = Math.floor(seen / square),
        linuxLoadingEffect = '[';

    var panel = document.querySelector('.panel_container'),
        c2 = document.querySelector('#c2'),
        arrow = document.querySelector('#upArrow');

    if (scrollTop >= start) {
        for (var i = 0; i < numberOfSquares; i++) {
            linuxLoadingEffect += '#';
        }
        for (var i = 0; i < 10 - numberOfSquares; i++) {
            linuxLoadingEffect += '-';
        }
        panel.style.position = 'fixed';
        panel.style.top = 0;
        panel.style.right = 0;
        panel.style.left = 0;
        pad.style.height = padHeight;
        c2.innerHTML = linuxLoadingEffect + ']',
        arrow.style.display = 'block';
    }
    else {
        panel.style.position = 'relative';
        pad.style.height = 0;
        c2.innerHTML = '';
        arrow.style.display = 'none';
    }
})
