---
layout: post
title: Javascript ile Scroll Control Eklentisi
tags: ['bilgisayar bilimleri', 'javascript']
---

## Javascript İle Scroll Control Eklentisi

Web sayfalarındaki bazı ufak ve akıllıca kişiselleştirmeler, hem kullanıcının bir bakış zamanı için de olsa eğlenmesini, hem de yazılımcının bu işi yaparken bir şeyler öğrenip zevk almasını sağlarlar. Akıllıca mı bilmem ama, ben de benimkinin kodlarını buraya koyuyorum. Bu kod, sayfasının tepesindeki [###-------] şeklindeki scroll barının kodları. Toplam 10 tane olan # ve - sayısı, sayfanın ne kadarının görülmüş olduğunu haber veriyor. Sağındaki başa dön butonu ise bu durumu sıfırlıyor.

Ayrıca bir de başında `footerControl` diye ayrı bir kod var. Bu da, sayfa uzunluğu ekran uzunluğundan küçük olsa bile, footer'ın sayfanın en altına yapışık halde görünmesini, footerın hiçbir zaman havada kalmamasını sağlıyor.

Bu arada, [#-] temasını seçmiş olmamın sebebi, Linux'ta terminal (bash) penceresinde bazı programların indirilme sürecini temsil eden bir ASCII görsellik eklentisi bulunması. Linux kullanıcılarına bir gönderme oldu böylece. Aslında oradakiler - yerine _ 'lerden oluşuyor. Ben düz tire koymayı tercih ettim.

**constant_panel.html**:

```html
<html>
    <div class="constant_zone" id="constant_zone">
        <div class="constant" id="constant">
            <div class="cp1" id="cp1">
                hello world.
            </div>
            <div class="hiddencp" id="hiddencp"></div>
            <div class="cp2" id="cp2"></div>
            <div class="cp3" id="cp3">
                <button class="top_button" id="top_button" onclick="returnTop()">
                    başa dön
                </button>
            </div>
        </div>
    </div>
    <div class="pad" id="pad"></div>
</html>
```

**master.js**:

```javascript
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

    seen += 42; // DEBUG: sometimes seen value stucks at approximately (pageHeight - 1)

    var constantZone = document.getElementById('constant_zone'),
        topButton = document.getElementById('top_button'),
        nightButton = document.getElementById('night_button'),
        hiddenCp = document.getElementById('hiddencp'),
        cp1 = document.getElementById('cp1'),
        cp2 = document.getElementById('cp2'),
        pad = document.getElementById('pad');

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
```

```css
.constant_zone {
    display: block;
    width: 100%;
    background-color: #262728;
    color: #bfbfbf;
    font-size: 0.8em;
    font-family: caglayandemirci_SourceCode;
    letter-spacing: 1px;
}
.constant {
    margin: 0 auto;
    justify-content: space-around;
    display: flex;
}

.cp1,
.cp2,
.cp3,
.hiddencp {
    width: 33%;
}
.cp1 { text-align: left; }
.cp2 { text-align: center; }
.cp3 { text-align: right; }

.hiddencp {
    display: none;
}

.top_button {
    color: white;
    background-color: #161718;
    border: 1px solid grey;
    display: none;
    float: right;
}

.pad {
    width: 100%;
    height: 46px;
    display: none;
}
```
