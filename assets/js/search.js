---
---

window.addEventListener('DOMContentLoaded', (e) => {
    var input = document.querySelector('#searchInPosts')
    if (input) {
        // firstly I tried JSON.stringify({ { site.posts } }) and it would be better but
        // this also works fine for now, I may will update here some time. 
        var titles = `{% for post in site.posts %}{{ post.title }}\n{% endfor %}`.split('\n')
        var excerpts = `{% for post in site.posts %}{{ post.excerpt }}\n{% endfor %}`.split('\n')
        var tags = `{% for post in site.posts %}{{ post.tags | sort | join: ", &ensp;" }}\n{% endfor %}`.split('\n')
        var urls = `{% for post in site.posts %}{{ post.url }}\n{% endfor %}`.split('\n')
        var dates = `{% for post in site.posts %}{{ post.date | date: "%d.%m.%Y" }}\n{% endfor %}`.split('\n')
        var foundArea = document.querySelector('#foundArea')

        input.addEventListener('input', (event) => {
            var key = event.target.value.toLowerCase()
            if (key.length > 2) {
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
                if (founds.length === 0)
                    foundArea.innerHTML = '<p class="search-not-found">Sorry, nothing matched.</p>'
                else {
                    foundArea.innerHTML = founds 
                }
            }
            else foundArea.textContent = ""
        })
        
        /*
        var titles = document.querySelectorAll('.post_title')
        titles.forEach((element) => {
            console.log(element.textContent)
        })
        input.addEventListener('input', (event) => {
            console.log(event.data)
        })
        */
    }
})

