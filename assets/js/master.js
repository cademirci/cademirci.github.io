window.onload = function() { footerControl() };
window.onscroll = function() { scroll() };

function footerControl() {
    var body = document.body,
        html = document.documentElement,
        pageHeight = Math.max( body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight ),
        windowHeight = window.innerHeight,
        footer = document.getElementById('footer');
    if (pageHeight <= windowHeight) {
        footer.style.position = "fixed";
        footer.style.bottom = 0;
        footer.style.left = 0;
        footer.style.right = 0;
    }
}

function scroll() {
    var body = document.body,
        html = document.documentElement,
        seen = Math.max(body.scrollTop, html.scrollTop) + window.innerHeight,
        pageHeight = Math.max( body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight );

    seen += 1; // DEBUG: sometimes seen value stucks at approximately (pageHeight - 1)

    var constantZone = document.getElementById('constant_zone'),
        topButton = document.getElementById('top_button'),
        nightButton = document.getElementById('night_button'),
        hiddenCp = document.getElementById('hiddencp'),
        cp1 = document.getElementById('cp1'),
        cp2 = document.getElementById('cp2'),
        pad = document.getElementsById('pad');

    if (body.scrollTop > 89 || html.scrollTop > 89) {
        constantZone.style.position = "fixed";
        constantZone.style.top = 0;
        pad.style.display = "block";
        topButton.style.display = "block";
        hiddencp.style.display = "block";

        var hashtag = pageHeight / 10,
            numberOfHashtags = seen / hashtag,
            linuxPercent = "[";
        numberOfHashtags = Math.floor(numberOfHashtags);

        var ratio = seen + "/" + pageHeight;

        for (var i = 0; i < numberOfHashtags; i++)
            linuxPercent += "#";
        for (var i = 0; i < 10 - numberOfHashtags; i++)
            linuxPercent += "-";
        linuxPercent += "]";

        cp2.innerHTML = linuxPercent;
        cp1.innerHTML = "";
        cp1.style.display = "none";

    }
    else {
        constantZone.style.position = "static";
        topButton.style.display = "none";
        hiddencp.style.display = "none";
        pad.style.display = "none";
        cp2.innerHTML = "";
        cp1.style.display = "block";
        cp1.innerHTML = "hello world.";
    }
}

function returnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function night() {
    document.body.style.backgroundColor = "#121314";
    document.body.style.color = "#f2f3f4";
    document.getElementById('navigation_bar').style.backgroundColor = "132639";
    document.getElementById('constant_zone').style.backgroundColor = "#222";
    document.getElementById('night_button').style.display = "none";
    document.getElementById('day_button').style.display = "block";
}

function day() {
    document.body.style.backgroundColor = "#f2f3f4";
    document.body.style.color = "#222324";
    document.getElementById('navigation_bar').style.backgroundColor = "#252627";
    document.getElementById('constant_zone').style.backgroundColor = "#161718";
    document.getElementById('day_button').style.display = "none";
    document.getElementById('night_button').style.display = "block";
}
