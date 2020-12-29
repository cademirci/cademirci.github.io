window.addEventListener('DOMContentLoaded', () => {
    var menuBox = document.querySelector('.menu_box')
    if (menuBox) {
        menuBox.addEventListener('click', menuBoxDown)
        menuBox.addEventListener('touchstart', menuBoxDown)
    }
    document.addEventListener('mousedown', menuBoxLeave);
    document.addEventListener('touchstart', menuBoxLeave);
})

function menuBoxDown() {
    const navboxlinks = document.querySelectorAll('.navbox a');
    const navBox = document.querySelector('.navbox');
    const menuLines = document.querySelectorAll('.menu_line');
    navBox.style.maxHeight = '500px';
    for (let i = 0; i < navboxlinks.length; i++) {
        navboxlinks[i].style.display = 'block';
    }
    for (let i = 0; i < menuLines.length; i++) {
        menuLines[i].style.backgroundColor = '#000';
    }
}
function menuBoxLeave(event) {
    const navboxlinks = document.querySelectorAll('.navbox a');
    const navBox = document.querySelector('.navbox');
    const menuLines = document.querySelectorAll('.menu_line');
    let className = event.target.getAttribute('class');
    if (className != 'navlink_div' && className != 'nav_image') {
        for (let i = 0; i < navboxlinks.length; i++) {
            navboxlinks[i].style.display = 'none';
        }
        navBox.style.maxHeight = '0';
        for (let i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#ccc';
        }
    }
}

window.addEventListener('scroll', () => {
    var start = document.querySelector('.home_header, .default_header, .blog_header, .gallery_header').offsetHeight,
        pad = document.querySelector('.panel_pad'),
        padHeight = document.querySelector('.panel_container').offsetHeight,
        // not current pad height, but it supposed to be
        body = document.body,
        html = document.documentElement,
        scrollTop = Math.max(body.scrollTop, html.scrollTop),
        seen = Math.ceil(scrollTop + window.innerHeight), // scroll bottom
        pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.scrollHeight, html.offsetHeight),
        square = pageHeight / 10,
        numberOfSquares = Math.floor(seen / square),
        linuxLoadingEffect = '',
        panel = document.querySelector('.panel_container'),
        c2 = document.querySelector('#c2'),
        tooltip_text = document.querySelector('.tooltip_returnTop');

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
        tooltip_text.style.display = 'block';
        c2.innerHTML = `[${linuxLoadingEffect}]`;
        c2.innerHTML = `[${linuxLoadingEffect}] ${seen}px/${pageHeight}px`;
    }
    else {
        panel.style.position = 'relative';
        pad.style.height = 0;
        c2.innerHTML = '';
        tooltip_text.style.display = 'none';
    }

    // green markers of navigation links ( ^ )
    var navlinks = document.querySelectorAll('.navbarlink')
    navlinks.forEach((element, index) => {
        var locationID = element.getAttribute('data-scroll-top')
        var location = document.querySelector(locationID).offsetTop - Math.ceil(window.innerHeight) / 2
        if (scrollTop > location) {
            element.classList.add('located')
            if (index != 0) {
                navlinks[index - 1].classList.remove('located')
            }
        }
        else {
            element.classList.remove('located')
        }
    })

})
