---
layout: post
title: (TUR) Birkaç Basit Programlama Sorusu
excerpt: >-
    Türkçe bir post olarak, C dili için yazılmış 7 adet giriş düzeyi çalışma sorusu ve cevapları.
tags: [C, temel programlama]
---

# {{ page.title }}

<div class="post_date">{{ page.date | date: "%d.%m.%Y" }}</div>
<div class="post_tags">{{ page.tags | sort | join: ", " }}</div>

***

Eski klasörleri karıştırırken, geçen yıl biyomedikal mühendisliği okuyan bir arkadaşım için kendisinin programlamaya giriş dersi çalışma sorularını çözmüş olduğumu gördüm. Sınava hazırlanması için yorum satırı (comment line) olarak birçok Türkçe açıklama yazmışım. Belgeleri göndererek arkadaşa ders anlatmışım bir nevi. Ben de bu çözümleri dünyayla paylaşmak adına onları buraya taşımaya karar verdim.

Kişisel sayfamda her şeyi İngilizce paylaştığım görülebilir, ancak arkadaşa açıklama yapmak için o tarihlerde bir ton Türkçe yorum satırı yazmış olduğumdan, bloğun bu gönderisi için bir istisna tanıdım. Zamanıma değecek olsa bunları çevirirdim. 

Bu bölüme bu ders söz konusu üniversitede C dili ile veriliyor, ben de doğal olarak çözümleri C ile yazdım fakat bu soruların tümü C'ye değil de genel programlamaya giriş olarak okunabilir. Çünkü `pointer` veya `malloc` kullanmak gibi C-spesifik hamleler yapmadığım görülebilir. Dünyanın her yerinde basit programlama öğretmek için benzer sorular sorulur ve bu cevaplar biraz web okuma sonucunda syntax'ları (programlama dili söz dizim ve kuralları) değiştirilerek her dile uyarlanabilir. 

Soruları arkadaşlara sorulmuş şekliyle aynen koyuyorum, dolayısıyla *kolay*, *orta*, *zor* gibi derecelendirmeleri ben yazmadım.

Son olarak, ödev veya proje gibi kişisel imza taşıması gereken şeyleri, programlama öğrenmek için, kendiniz uğraşarak yapmanız çok önemlidir. Bu gönderidekiler ödev değil çalışma soruları olduğundan burada böyle bir sakınca yoktur, fakat örnek teşkil etmesi açısından, webde "milletin ödevini yaptım" diyerek post paylaşmanız şık bir hareket olmayacaktır. :) (Bu ödevlerin bitiş tarihlerinden sonra kişisel alıştırma açısından kendiniz yazıp koyarsanız o başka)

***

**1**

(orta): Kullanıcıdan enter girilene kadar harf ve boşluktan oluşan bir cümle alıp, son kelimenin harf sayısını yazdırınız.

Örnek:

Girdi: corona yuzunden sinav da yapamadik

Çıktı: 9

(Bu soru için yorum satırlarıyla açıklama yazmamışım, sanırım arkadaşım da soruyu yapmış)

```c
#include <stdio.h>
#include <string.h>

int main() {
  int i;
  char sentence[100];
  printf("cumlenizi yazin...\n");
  scanf("%[^\n]%*c", sentence);
  int length = strlen(sentence);
  for (i = length; i >= 0; i--) {
    if (sentence[i] == ' ') {
      printf("%d\n", length - 1 - i);
      break;
    }
  }
  return 0;
}
```

**2**

(zor): Bir tam sayı dizisini pozitif bir tam sayının gösterimi olarak ele alıp, bu sayının bir fazlasını gösteren diziyi oluşturunuz.

Örnek:

int d[] = {3, 6, 2, 1}; dizisi 4 basamaklı 3621 sayısını gösterir, 1 fazlası için dizi {3,6,2,2} olmalıdır.

int d[] = {4, 3, 9}; dizisi 3 basamaklı 439 sayısını gösterir, 1 fazlası için dizi {4, 4, 0} olmalıdır.

int d[] = {9, 9, 9}; dizisi 3 basamaklı 999 sayısını gösterir, 1 fazlası için dizi 4 elemanlı {1, 0, 0, 0} olmalıdır.

```c
#include <stdio.h>

int main() {
  int d[] = {4, 3, 9, 9};
  int n = 0;
  for (int i = 0; i < 4; i++) {
    n = n * 10 + d[i]; 
    // oncelikle her seferinde array'deki sayiyi 
    // 10'un bi fazla katiyla carparak arrayin 
    // temsil ettigi sayiyi buluyorum
  }  
  n = n + 1; // simdi bu 4400 oldu  
  for (int i = 3; i >= 0; i--) {
    // array'e sondan basladim. cunku d[i] 
    // dedigim seyin ilk olarak son basamak 
    // olan birler basamagi olmasi lazim. 
    // sonra en buyuk basamaga dogru gitmeliyim.
    d[i] = n % 10;
    n = n / 10;
    /*
        simdi her seferinde once 10'la modunu alip, 
        sayiyi 10'a boluyorum ki soyle oluyor.
        4400 % 10 = 0
        4400 / 10 = 440 bi sonrakinde bunla baslayacak
        440 % 10 = 0
        440 / 10 = 44
        ... 4
        ... 4
        sondan basa dogru okundugunda artik 
        arrayimiz 4 4 0 0 
    */
  }  
  // hatta bir de printle gosterelim. 
  for (int i = 0; i < 4; i++) {
    printf("%d ", d[i]);
  }
  return 0;
}
```

**3**

(orta): Kullanıcıdan rakamlardan oluşan bir string alıp, atoi() fonksiyonunu kullanmadan tamsayıya çeviriniz.

```c
#include <stdio.h>

int aToInteger(char []);

int main() {
  char a[100];
  int n;
  printf("gonder bi string bakalim\n");
  scanf("%s", a);
  n = toString(a);
  printf("Integer = %d\n", n);
  return 0;
}

int aToInteger(char a[]) {
  int c, sign, offset, n;

  if (a[0] == '-') {  
    // eger sayi negatifse, - isareti en basta olacak ve 
    // bu sayinin negatif oldugunu ilk karakter - oldugu icin anliycaz
    sign = -1;
  }
  if (sign == -1) {  
    // simdi offset denen sey fazlalik. eger sayi negatifse, for'u donmeye
    // ikinci karakterden basliycaz, yoksa - isaretini sayiya cevirmeye
    // calisir ve patlariz.
    offset = 1;
  }
  else {
    offset = 0;
  }
  n = 0;
/*
    simdi ASCII tablosu diye bi sey var, size gosterdiler mi bilmiyorum. 
    programlamada her character bi sayiyla temsil edilir. bu tabloda '0' 
    karakteri 48 numaradan baslar. 49 1, 50 2 diye gider '9' karakteri 57dir.

    simdi ben '0' gordugum yerde bu karakteri elde edip matematiksel bi islemle 
    '0' cikarabilirim. geriye 0 kalir ve C dili bize bunu sayi olarak doner. 
    demek ki 0'i sayi olarak elde etmis oldum. ayni sekilde '1' - '0' da 1 
    ediyor. '0' 48 ile basladigi icin, aslinda '1' - 48 de diyebilirdik. ayni sey.
*/
  for (c = offset; a[c] != '\0'; c++) {
    n = n * 10 + a[c] - '0';
  }
  if (sign == -1) { 
    // yukarda negatif mi degil mi gorduyduk, negatifse -'lisini donuyorum.
    n = -n;
  }
  return n;
}
```

**4**

(orta): int myPow(int x, int y); prototipi verilen, x sayısının y. Kuvvetini özyineli bulan
fonksiyonu yazınız.

```c
#include <stdio.h>

int power(int n1, int n2); // myPow lafindan hoslanmadim :p

int main() {
  int number, a, result;
  printf("Enter base number: ");
  scanf("%d", &number);
  printf("Enter power number(positive integer): ");
  scanf("%d", &a);
  result = power(number, a);
  printf("%d^%d = %d", number, a, result);
  return 0;
}

int power(int number, int a) {
  if (a != 0)
    return (number * power(number, a - 1));
  else
    return 1;
  /*
      simdi bu recursive (ozyineli diye ceviriyolar) algoritma 
      soyle bisey, fonksiyonun bire bir kendisini farkli 
      parametrelerle fonksiyonumuzun icinde tekrar cagiralim ki, 
      base case'e (programa "dur yeter" dicegimiz yer) gelene kadar 
      fonksiyon ayni seyleri yapsin. burada base case a'nin 0 olmasi.

      yani

      3^4 sayisini hesaplamaya calisiyo olalim. number'imiz 3. base 
      case 4'un 0 olmasi

      boylece 4 sifir olana kadar

      3 * base(3, 3)  --> fonsiyonu bi daha cagiriyoz.
      3 * base(3, 2)  --> bi daha
      3 * base(3, 1)  --> bi daha
      3 * base(3, 0)  --> aha simdi dur

      simdi yukari dogru cikacak bilgisayar. 

      oldu mu sana 3 * 3 * 3 * 3
  */
}
```

**5**

(orta): Bir d tam sayı dizisi, 1 tanesi hariç her sayının 2 defa yer aldığı bir dizidir, bu dizide tek olan sayıyı bulan kodu yazınız.

Örnek: int d[] = {3, 1, 3, 12, 4, 7, 7, 12, 4}; dizisinde 1 haricinde tüm sayılar 2 kere geçmektedir, 1 yazdırılmalıdır.

```c
#include <stdio.h>

int main() {
  int d[] = {3, 1, 3, 12, 4, 7, 7, 12, 4};
    
  int length = sizeof(d)/sizeof(d[0]);
  // arrayinizin length'i sinavda verilir miydi bilmiyom ama
  // c'de array length'i bilinmedigi yerde boyle bulunur
        
  for (int i = 0; i < length; i++) {
    int count = 0;
    for (int j = 0; j < length; j++) {
      if (d[i] == d[j])
        count++;
    }
    if (count == 1)
      printf("%d", d[i]);
      count = 0;
  }

  /*
    simdi bi tane count tuttum (0), sonra dusundum ki ic ice 
    iki for dondurup arrayda gezdigimde, sayilarin her birini 
    butun arrayle karsilastiracak. 

    yani 3 icin 
    3, 1, 3, 12, 4, 7, 7, 12, 4 gezicek

    1 icin
    3, 1, 3, 12, 4, 7, 7, 12, 4 gezicek
    sayiyla esit oldugu yerde count'u arttirsin dedim.

    dikkat edersen 3 icin gezdigi yerde count 2, cunku 3'u iki 
    kere gormus olacak.

    count'un 1 oldugu tek yer, sayinin bir defa gectigi yerdir. 
    array'deki o "yer"den kastimiz da i oluyor. d[i] bize sayiyi verir.
  */

  return 0;
}
```

**6**

(kolay): n x n boyutlarında iki boyutlu bir dizide, i. satır ve i. sütun toplamları eşit olan i sayılarını yazdırınız.

```c
#include <stdio.h>

int main() {
  int d[4][4];

  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      d[i][j] = i + j;
    }
  }
  d[0][1] = 8;
  d[1][3] = 9;
    /*
    buraya kadarki kisim soruyla ilgili degildi =D
    sana soyle bi matris (iki boyutlu array) olusturmus oldum

    0  8  2  3
    1  2  3  9
    2  3  4  5
    3  4  5  6

    bunun gibi bir matrisi bir zahmet hoca vermis olur
    */
    
  // istersen bu matrisi soyle bastirabilirsin.
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      printf("%d ", d[i][j]);
    }
    printf("\n");
  }
    
    /* 
    simdi burasi sorunun cozumu. 
    burada, programimizin 2 vermesi gerekir.
    cunku 

    0  8  2  3
    1  2  3  9
    2  3  4* 5
    3  4  5  6

    yildizla isaretledigim 4 sayisinin hem satir hem sutunu toplami esit.
    bunu bulmanin yolu, her seferinde once satiri, sonra sutunu sabit tutup
    digerini matrisin bir boyutunca (burada 4 gordugun gibi) gezip toplamak
    ahan da soyle bir sey oluyor
    */

  for (int i = 0; i < 4; i++) {
    int colSum = 0; // satir toplam (column sum)
    int rowSum = 0; // sutun toplam (row sum)
    for (int j = 0; j < 4; j++) {
      colSum += d[i][j];
      rowSum += d[j][i];   
    }
    if (colSum == rowSum)
      printf("%d ", i);
  }

  return 0;
}
```

**7**

(zor): 2 boyutlu bir karakter dizisindeki her bir string’in başlangıcında ortak olan en uzun ön eki yazdırınız:

Örnek: char strd[3][20] = {“abc012”, “abcd324”, “ab12cd”}; dizisinde en uzun ortak ön ek “ab” dir.

```c
#include <stdio.h>
#include <string.h>

int main() {

  char strd[3][20] = {"abc012", "abcd324", "ab12cd"};
  int a = 1;
  char newString[20] = ""; 
  // yeni stringimiz yani harf ekleye ekleye en uzun on ek yapicaz bunu

  for (int i = 0; i < 20; i++) {
    for (int j = 0; j < 2; j++) {
      if (strd[j][i] != strd[j+1][i]) 
        a = 0;
    }
    /*
    simdi buradaki mantik su
    sirayla her birinin once ilk harfine, sonra ikinci harfine
    bakiyorum. yani buradaki sira once birincisinden basliyim
    birincisinin ilk harfi ikinci harfi vs degil. Onun yerine
    birincisinin ilk harfi, ikincisinin ilk harfi diye gidiyor

    j loop'unu 2de bitirmemin sebebi bu arada, if'in icinde j+1 
    ifadesini kullaniyor olmam. eger 3 demis olsaydim indexOutOfBounds
    yerdik yani stringimizin disina cikardik.

    bunlarin harflerini karsilastira karsilastira, ayni olmadiklari
    yerde basta 1 olarak atadigim a sayisini 0 yapıyorum. 
    sonra donup bakiyorum ki a sayisi 1 ise, demek ki 0 olmamis, bu da
    demek ki birbirine esit olmayan iki farkli karakter gormemis.
    o zaman diyorum ki programa, cekinme bu harfi bas. newString'e koy.

    boylece farkli harfler gorene kadar newString'e harf koyuyor.
    bu da ayni olan en uzun on ek demek.
    */
        
    if (a == 1) {
      newString[i] = strd[0][i];
    }
  }
  printf("%s", newString);

  return 0;
}
```