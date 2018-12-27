---
title: Jekyll 2
layout: post
---

Bir Jekyll sitesi kurmanın aşamaları, gerek Jekyll'in [kendi sayfasında](https://jekyllrb.com/docs/), gerek YouTube videolarında ([1](https://www.youtube.com/watch?v=iWowJBRMtpc&t=160s), [2](https://www.youtube.com/watch?v=T1itpPvFWHI)) gerek Türkçe kaynak olarak [blog yazılarında](https://medium.com/@nafidurmus/jekyll-kullanarak-20-dakikada-blog-yap%C4%B1m%C4%B1-b2550043f455) bulabilirsiniz. Aynılarını getirip buraya yazmanın bir anlamı olmadığını düşündüm. Dolayısıyla bu kısmı geçiyorum.

### Sitenin Yapısı

Jekyll sitenizi kurduğunuzda, hiçbir oynama yapmadığınız siteniz içinde şunlarla yüklenir (sizin için Linux'ta tekrar yükleyip ekran alıntısı aldım):

![](images/post_images/default_jekyll.png)

Tabiki bütün bu klasörler ve içindeki dosyların bir fonksiyonu, işe yaradığı bir nokta var. Ama, meseleyi biraz daha basitleştirmek adına, ben bu yazı için temel dosyaları gösterecek şekilde bir tablo hazırladım. Sitenizde bunlar olduğu takdirde, web sayfanız çalışır. Hatta, daha fazlasını yapmasanız bile gayet profesyonel görünümlü ve iyi çalışan bir siteye sahip olabilirsiniz.

![](../caglayandemirci.github.io/images/post_images/jekyll_structure.png)

### Liquid

Jekyll sayesinde, sitenizdeki HTML sayfalarının içinde Ruby ile yazılmış bir şablon dili (*template language*) olan Liquid ile programlama yapabilirsiniz. Bu dil, `{{ }}` ya da `{% %}` içinde yer alan değer ve komutları okuyarak çalışır. 

**`_includes`** ve **`{% include %}`**: 

`_includes`klasörünüzün içinde, temelde header ve footer, isterseniz de bin türlü başka sayfa parçanızı barındırabilirsiniz. Bunlar .html dosyaları olmalıdır. Liquid ile, herhangi bir sayfanın içinde bu sayfa parçalarını `{% include ... %}`syntaxıyla kullanabilirsiniz. Örneğin:

```html
<html>
    {% include head.html %}
    <body>
        {% include header.html %}

        {% include footer.html %}
    </body>
</html>
```

**`_layouts`**:

Sırada, içinde içeriklerinizin de görüntüleneceği ve böylece sitenizin yüzü olacak sayfa şekilleriniz var. 

```html
<html>
    <head>
        <title>{{ page.title }}</title>
    </head>
    {% include head.html %}
    <body>
        {% include header.html %}
			
        	{{ content }}
        	
        {% include footer.html %}
    </body>
</html>
```

Bu, bir `post.hmtl` layout'u için uygun bir örnek. Bu sayfa, sitenizi yayına koyduğunuzda Markdown dosyanızın içine yazdığınız bütün içeriği alıp `{{ content }}` 'in yerine koyacak. Bunun ne demek olduğunu son Liquid örneğimden sonra açıklayacağım.

`index.html`:

Burası, sitenizin anasayfasıdır. Domain adınızı aldığınızda, ya da almayıp kullanıcıadı.github.io sayfanıza girdiğinizde karşınıza çıkacak sayfa budur. Dolayısıyla, buraya genellikle, blog yazılarınızın yeniden eskiye sıralaması (adı üstünde, *index*) gibi bir yapı yerleştirirler.

```html
<html>
    <head>
        <title>{{ page.title }}</title>
    </head>
    {% include head.html %}
    <body>
        {% include header.html %}
			
        {% for post in site.posts %} 
        	<h4>{{ post.title }}</h4>
        	{{ post.excerpt }}
        	{{ post.date | date: "%d.%m.%Y" }}
        	{% if post.tags.size > 0 %}
        		{% if post.tags.size > 1 %}
        			{{ post.tags | sort | join: ", " }}
        		{% else %}
        			{{ post.tags }}
        		{% endif %}
        	{% endif %}
        {% endfor %}
        	
        {% include footer.html %}
    </body>
</html>
```

Böyle bir kod sonucunda, artık anasayfanızda, bugüne kadar post ettiğiniz bütün yazılarınız yeniden eskiye; kısa özetleri, tarihleri ve tag'leri ile birlikte yayınlanırlar. Tabii bu kod parçasını çok temel tuttum, HTML ve CSS özelliklerini hiç yazmadım. Bunlar istenildiği gibi oynanıp şekillenebilirler. İsterseniz, bu sitenin footer'ında, bütün tasarım ve kodlamayı yayımladığımı söylediğim kısma gidip benim sayfalarımın nasıl yazıldığına bakabilirsiniz. Buna yakındırlar.

Includes ve Layouts klasörlerindeki HTML dosylarının ve index'in içinde Liquid programlayarak sitemizin en temel yapısını oluşturduk. Bu üç örnek, bir başlangıç olabilir. 