window.addEventListener('load', () => {
    document.querySelector('#upArrow').style.display = 'none';

    document.querySelector('.menu_box').addEventListener('mouseenter', menuBoxDown);
    document.querySelector('.menu_box').addEventListener('mouseenter', touchstart);
    document.addEventListener('mousedown', menuBoxLeave);
    document.addEventListener('mousedown', touchend);
})

function menuBoxDown() {
    var navboxlinks = document.querySelectorAll('.navbox a');
    var navBox = document.querySelector('.navbox');
    navBox.style.maxHeight = '500px';
    for (let i = 0; i < navboxlinks.length; i++) {
        navboxlinks[i].style.display = 'block';
    }
}
function menuBoxLeave() {
    let className = event.target.getAttribute('class');
    if (className != 'navlink_div') {
        var navboxlinks = document.querySelectorAll('.navbox a');
        for (let i = 0; i < navboxlinks.length; i++) {
            navboxlinks[i].style.display = 'none';
        }
        var navBox = document.querySelector('.navbox');
        navBox.style.maxHeight = '0';
    }
}

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
