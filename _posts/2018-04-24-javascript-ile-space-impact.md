---
layout: post
title: Javascript ile Space Impact
tags: ['bilgisayar bilimleri', 'javascript']
image: ../cs/jssi.png
---
Çok ayrıntıya girmeden, temel dinamikler kullanılarak yazılmış bir Javascript alıştırması. 

<p2>24.04.2018 2:36</p2>

## Javascript ile Space Impact

Snake, Space Impact gibi oyunlar, 1990'ların en popüler oyunlarındandı. Artık bu tip oyunlar hayatımızda oynanmak için değil, kodları yazılarak programlama becerisi geliştirmek, alıştırma yapmak amacıyla var oluyorlar.

Karşınızdaki, son derece basit, kötü bir SI oyunu. Öldükçe ya da geçtikçe gelen tek bir düşmandan, skor ve hayat değişkenlerinden ve css ile beş dakikada şekli verilmiş kötü bir uzay gemisinden ibaret. Fakat burada amaç JS dinamiklerine çalışmaktı. Kodlarımın tamamına yakını temel JS; yalnızca birkaç satırda da **jquery** kullandım. 

Oyunu oynayabilmek ve/veya HTML ve CSS kodlarıyla beraber inceleyebilmek için onları buradan indirebilirsiniz.

<div class="dir_zone">
<a href="https://github.com/caglayandemirci/caglayandemirci.github.io/raw/master/cs/JS_Space_Impact.rar">
<img class="dir" src="../cs/dir_rar.png">
</a>
<a href="https://github.com/caglayandemirci/caglayandemirci.github.io/raw/master/cs/JS_Space_Impact.tar.gz">
<img class="dir" src="../cs/dir_targz.png">
</a>
</div>


Bu JS kodu son derece temel düzeyde ve geliştirmeye açık. Düşman sayıları ve şekilleri arttırılabilir, bir start/reset butonu koyulabilir, farklı ateş şekillerine çalışılabilir, farklı değişkenler de eklenerek oyun daha sayısal dinamik hale getirilebilir, vesaire...

```javascript
document.getElementById("life").innerHTML = 3;
document.getElementById("score").innerHTML = 0;
document.addEventListener("keydown", keyPush);
var ele = document.getElementById("gamer");
pos = 20;
function keyPush(event) {
	switch (event.keyCode) {
		case 37: goLeft();
			break;
		case 39: goRight();
			break;
		case 38:
			$("#gameBoard").append("<div id=\"bullet\"></div>");
		   fire();
			break;
	}
}
function goLeft() {
	if (pos == 20)
		pos += 20;
	pos -= 20;
	ele.style.left = pos + "px";
}
function goRight() {
	if (pos == 920)
		pos -= 20;
	pos += 20;
	ele.style.left = pos + "px";
}

var bulletY = 575;
var bulletX = 0;
function fire() {
	bulletX = pos + 25;
	var bullet = document.getElementById("bullet");
	bullet.style.left = bulletX + "px";
	bulletY = 575;
	bullet.style.top = bulletY + "px";
	var move = setInterval(bulletMove, 5);
	function bulletMove() {
		bulletY-=5;
		bullet.style.top = bulletY + "px";
		if (bulletY == 0) {
			$("#bullet").remove();
			clearInterval(move);
			bulletY = 575;
		}
	}
}

var score = 0;
var life = 3;
function game() {
	$("#gameBoard").append("<div id=\"block\"></div>");
	var block = document.getElementById("block");
	var eX = Math.random()*900 + 50;
	var enemyX = eX + "px";
	block.style.left = enemyX;
	var enemyY = 0;
	var move = setInterval(enemyMove, 5);
	function enemyMove() {
		enemyY++;
		block.style.top = enemyY + "px";
		if (enemyY >= 630) {
			$("block").remove();
			clearInterval(move);
			life--;
			document.getElementById("life").innerHTML = life;
			game();
			if (life == 0) {
				window.alert("GAME OVER");
			}
		}
		if (bulletX > eX && enemyY > bulletY &&
			 bulletX < eX + 20) { // && enemyY > bulletY
			$("block").remove();
			clearInterval(move);
			score++;
			document.getElementById("score").innerHTML = score;
			game();
		}
	}
}
```

