---
---
{{ site.projects | jsonify }}

window.addEventListener('DOMContentLoaded', () => {

    var navlinks = document.querySelectorAll('.navlink');
    for (var i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener('click', function(e) {
            let anchor = this.getAttribute('data-scroll-top');
            jump(anchor);
        })
    }
    var returners = document.querySelectorAll('#c1, #c2, #upArrow, .signature');
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

    var skillTags = document.querySelectorAll('.skills');
    for (var i = 0; i < skillTags.length; i++) {
        skillTags[i].addEventListener('click', function(e) {
            var projectBox = document.querySelector('.project_box');
            let description = "";

            {% for project in site.projects %}
                if (this.getAttribute('id') == 'skills_jekyll') {
                    {% if project.name == "jekyll" %}
                        description += `
                            {{ project.title }} {{ project.github_link }} {{ project.description }}
                        `;
                    {% endif %}
                }
                if (this.getAttribute('id') == 'skills_django_and_leaflet') {
                    {% if project.name == "django&leaflet" %}
                        description += `
                            {{ project.title }} {{ project.github_link }} {{ project.description }}
                        `;
                    {% endif %}
                }
                if (this.getAttribute('id') == 'skills_jquery') {
                    {% if project.name == "jquery" %}
                        description += '{{ project.description }}';
                    {% endif %}
                }
                if (this.getAttribute('id') == 'skills_others') {
                    {% if project.name == "others" %}
                        description += '{{ project.description }}';
                    {% endif %}
                }
            {% endfor %}

            for (var i = 0; i < skillTags.length; i++) {
                skillTags[i].setAttribute('active', 'false');
            }
            projectBox.innerHTML = description;
            projectBox.style.opacity = 0;
            var opAn = 0; // opacity animation counter
            var fadeIO = setInterval(fadeIn, 25);

            function fadeIn() {
                opAn += 0.05;
                projectBox.style.opacity = opAn;
                if (projectBox.style.opacity == 1) {
                    clearInterval(fadeIO);
                }
            }
            this.setAttribute('active', 'true');
            projectBox.setAttribute('appearance', 'true');
        })
    }

    var wrappers = document.querySelectorAll('.content_wrapper');
    var colorArray = ['inherit', '#1a1e1a', '#101010', '#1a1a1e'];
    for (var i = 0; i < wrappers.length; i++) {
        wrappers[i].style.backgroundColor = "" + colorArray[i];
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
