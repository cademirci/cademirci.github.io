window.addEventListener('DOMContentLoaded', (e) => {
    var input = document.querySelector('#searchInPosts')
    if (input) {
        // firstly I tried JSON.stringify({ { site.posts } }) and it would be better but
        // this also works fine for now, I may will update here some time. 
        var titles = `Compare\nAbout This Webpage (cademirci.com)\nA Note About Java Threads\nAbout C# Frameworks\nSome Examples of Introduction to Programming\nA Discord Bot and JavaScript Timing Events\nSome Things About CSS Animations\nSome Things About Images\nA Web Application With World Map\nAbout Dark Page Design\n`.split('\n')
        var excerpts = `Static website programming with a Ruby framework Jekyll -which this webpage is written in- and a JavaScript framework Gatsby.\nStatic website programming with a Ruby framework Jekyll -which this webpage is written in- and a JavaScript framework Gatsby.\nI will take a look to this post if I need to a rare time like now that I need to write Java thread code. I hope it also be helpful for you. \nC# web development tools like ASP, ASP.NET, ASP.NET MVC and why I do not like them.\nSome Java and Python examples, a basic analyze tool I wrote in Python (ENG until now), and some C examples commented in Turkish.\nA countdown timer Discord bot written in Discord.js, Node.js, and some tricks about setTimeout() and setInterval() functions.\nA little bit about web page animating, old fashions, some bugs...\nSome tricks about working on web images, both JavaScript and css sides.\nAbout a web application I wrote that allows you to mark with a pin somewhere on an open world map, put a photo and a text related with there and the memory.\nAbout web page design with dark backgrounds.\n`.split('\n')
        var tags = `Gatsby, &ensp;JavaScript, &ensp;Jekyll, &ensp;React, &ensp;Ruby, &ensp;SSG, &ensp;web design, &ensp;web programming\nGatsby, &ensp;JavaScript, &ensp;Jekyll, &ensp;React, &ensp;Ruby, &ensp;SSG, &ensp;web design, &ensp;web programming\nJava, &ensp;general programming, &ensp;non blocking systems, &ensp;threads\n.NET, &ensp;.NET MVC, &ensp;ASP, &ensp;backend, &ensp;c#, &ensp;web programming\nC, &ensp;Java, &ensp;Python, &ensp;basic programming, &ensp;general programming\nDiscord.js, &ensp;Electron.js, &ensp;JavaScript, &ensp;Node.js\nCSS, &ensp;front-end, &ensp;web design, &ensp;web programming\nimage manipulating, &ensp;web programming\nDjango, &ensp;Leaflet.js, &ensp;Python, &ensp;back-end, &ensp;web app\nUI, &ensp;web design\n`.split('\n')
        var urls = `/gatsby-and-jekyll-2\n/gatsby-and-jekyll-1\n/a-note-about-java-threads\n/about-c-frameworks\n/some-examples-of-introduction-to-programming\n/a-discord-bot-and-javascript-timing-events\n/some-things-about-css-animations\n/some-things-about-images\n/a-web-application-with-world-map\n/about-dark-page-design\n`.split('\n')
        var dates = `14.08.2021\n13.08.2021\n06.08.2021\n04.01.2021\n31.10.2020\n26.05.2020\n08.05.2020\n29.03.2020\n25.03.2020\n19.03.2020\n`.split('\n')
        var foundArea = document.querySelector('#foundArea')
        input.addEventListener('input', (event) => {
            var key = event.target.value.toLowerCase()
            let shortButOk = false 
            shortButOkIndex = ["js", "py", "c#"]
            shortButOkIndex.forEach(element => {
                if (element === key) {
                    shortButOk = true
                }
            });
            if (key.length > 2 || shortButOk) { // to avoid links or titles be wrapped by a span
                var founds = "", data = ""
                for (let i = 0; i < titles.length; i++) {
                    data = titles[i] + excerpts[i] + tags[i]
                    if (data.toLowerCase().includes(key)) {
                        // html in js is unprofessional I know but...
                        var inner = `<a href="--POST.URL--"><div class="found-card">${titles[i]}<br>--breakline--
                                     <p class="excerpt">${excerpts[i]}</p>
                                     <p class="date">${dates[i]}</p>
                                     <span class="tag">${tags[i]}</span><br></a></div>
                                     <hr class='black-line'><br>`
                                     .split('--breakline--')
                        var upperKey = key.toUpperCase()
                        founds +=    (inner[0].toUpperCase() + inner[1].toLowerCase())
                                     .replaceAll(upperKey, `<span style='color:#fd6666'>${upperKey}</span>`)
                                     .replaceAll(key, `<span style='color:#fd6666'>${key}</span>`)
                                     .replace('--POST.URL--', urls[i])
                    }
                }
                if (founds.length === 0) {
                    foundArea.innerHTML = '<p class="search-not-found">Sorry, nothing matched.</p>'
                }
                else {
                    foundArea.innerHTML = founds 
                }
            }
            else { 
                foundArea.textContent = ""
            }
        })
    }
})
