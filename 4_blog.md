---
layout: default
title: Blog
permalink: /blog
is_navlink: true
navlink_name: Blog
---

# {{ page.title }}

<img src="/assets/images/iconbl.png" class="title_image">

{% for post in site.posts %}
<ul>
<li> <a href="{{ post.url }}">{{ post.title }}</a> &ensp; {{ post.date | date: "%d.%m.%Y" }}
    {% if post.tags.size > 0 %}
        <span class="post_tags">
            {% if post.tags.size > 1 %}
                [{{ post.tags | sort | join: ", " }}]
            {% else %}
                [{{ post.tags }}]
            {% endif %}
        </span>
    {% endif %}
</li>
</ul>
{% endfor %}

### Turkish

Merhaba! Ekşi Sözlük'te içerik üretirken (birkaç yıl oluyor) metal ile ilgili birkaç yazı yazmıştım. İçlerinden Ekşi Şeyler için seçilmiş olanlarından ikisini buraya koyuyorum.

- [Sıkı Bir Opeth Hayranından: Efsane Grubun Özenle Seçilmiş En İyi Albüm, Şarkı ve Riff'leri](https://seyler.eksisozluk.com/siki-bir-opeth-hayranindan-efsane-grubun-ozenle-secilmis-en-iyi-album-sarki-ve-riffleri)
- [İnsanı Duvara Toslamış Gibi Yapan Metal Grubu Gojira'nın Albüm Albüm Kısa Tarihi ](https://seyler.eksisozluk.com/insani-duvara-toslamis-gibi-yapan-metal-grubu-gojiranin-album-album-kisa-tarihi)

Medium bağlantımı da buraya koysam mı koymasam mı bilemedim (gerçi stalklayınca bulmak çok zormuş gibi); aradan zaman geçince içlerinde anlatımını başarısız bulduğum birkaç yazı olduğunu görüyorum (aslında zaten birkaç tane yazı var), ama 'blog'un anlamı bu değil midir zaten diyip yine de koyuyorum. &rarr; [Medium](https://medium.com/@cademirci)