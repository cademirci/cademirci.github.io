// ---
// ---
// {{ site.posts | jsonify }}

window.addEventListener('DOMContentLoaded', () => {

    var navlinks = document.querySelectorAll('.navlink');
    for (var i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener('click', function(e) {
            let anchor = this.getAttribute('data-scroll-top');
            jump(anchor);
        })
    }
    var returners = document.querySelectorAll('#c1, #c2, .signature');
    for (var i = 0; i < returners.length; i++) {
        returners[i].addEventListener('click', function(e) {
            if ((this.getAttribute('id') == 'c1' || this.getAttribute('class') == 'signature') &&
                window.location.pathname != '/') {
                    window.location.href = "/";
            }
            else {
                returnTop();
            }
        })
    }

    if (window.location.pathname == '/') {
        var wrappers = document.querySelectorAll('.content_wrapper');
        var colorArray = ['inherit', '#101010', '#191c1f', '#1a1e1a'];
        for (var i = 0; i < wrappers.length; i++) {
            wrappers[i].style.backgroundColor = "" + colorArray[i];
        }
    }

    // to cancel first display
    document.querySelector('.tooltip_returnTop').style.display = 'none';

    // button listeners
    var blogEMButton = document.querySelector('#blogEMButton');
    var blogSoftwareButton = document.querySelector('#blogSoftwareButton');
    var blogPageButton = document.querySelector('#blogPageButton');
    var EMPosts = document.querySelector('#EMPosts');
    var softwarePosts = document.querySelector('#softwarePosts');

    if (blogPageButton) {
        document.querySelector('#blogPageButton').addEventListener('click', () => {
            window.location.href = '/blog';
        })
    }

    if (blogEMButton) {
        blogEMButton.addEventListener('click', () => {
            blogEMButton.style.backgroundColor = '#1d6240';
            blogSoftwareButton.style.backgroundColor = '#1a1a1a';
            softwarePosts.style.display = 'none';
            EMPosts.style.display = 'block';
        })
    }

    if (blogSoftwareButton) {
        blogSoftwareButton.style.backgroundColor = '#1d6240';
        blogSoftwareButton.addEventListener('click', () => {
            blogSoftwareButton.style.backgroundColor = '#1d6240';
            blogEMButton.style.backgroundColor = '#1a1a1a';
            EMPosts.style.display = 'none';
            softwarePosts.style.display = 'block';
        })
    }

})

function jump(anchor) {
    var location = document.querySelector(anchor).offsetTop;
    window.scrollTo({
        top: location - 100,
        behavior: 'smooth'
    });
}

function returnTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
