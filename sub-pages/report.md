---
layout: sub-page
title: report
---

# Reports

02.02.2018

İletişim sayfasındaki mail kutusu sağa doğru bir miktar dışarı taştı. .css dosyasında üstteki satır alttakiyle değiştirildi:

<div class="code_source_name">style.css</div>
```css
width: 100%;
width: calc(100% - 30px);
```

bu kodla taşma sorunu giderilince, gitpages'in bir sebepten dolayı padding (10px*2) ve boder genişliklerini (5px*2) de div genişliğine eklemiş olduğu anlaşıldı.