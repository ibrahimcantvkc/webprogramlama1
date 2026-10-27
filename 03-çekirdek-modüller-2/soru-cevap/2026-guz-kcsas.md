# Soru-Cevap: CSS ile Stil ve Düzen

**KCŞ A.Ş. · 2026 Güz · Web Programlama I**
Konu: MDN çekirdek modülleri: CSS styling basics, CSS text styling, CSS layout

Bu dosya, laboratuvar dersinde QA (Kalite Güvence) rolünün sınıfa yönelteceği soruları içerir. Sorular, vize ve finaldeki "kodu zihinde çalıştır, hatayı bul" mantığıyla hazırlanmıştır: önce kodu gösterin, sınıfa düşünme süresi verin, sonra cevabı birlikte tartışın.

---

## Ana sorular (5)

### Soru 1: Kutu ekranda kaç piksel?

```css
.kutu {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

**a)** Bu kutu ekranda kaç piksel genişliğinde görünür?
**b)** Kurala `box-sizing: border-box;` eklenirse ne olur?

**Cevap:**

- **a) 350px.** Standart box model'de `width` sadece içeriği ölçer; padding ve kenarlık eklenir: 300 + 20 + 20 + 5 + 5 = 350. Margin kutunun boyutuna sayılmaz.
- **b) 300px.** `border-box`'ta `width` görünen kutunun tamamıdır; içerik alanı 300 − 40 − 10 = 250px'e küçülür.

**Tartışma notu:** "Margin'i neden saymadık?" diye sorun. Margin kutunun sayfada kapladığı alanı etkiler ama kutunun kendisi kenarlıkta biter.

---

### Soru 2: Bağlantı hangi renkte?

```html
<nav id="menu">
  <ul>
    <li><a class="link" href="#">Ana sayfa</a></li>
  </ul>
</nav>
```

```css
nav ul li a.link { color: green; }
nav .link        { color: blue; }
#menu a          { color: red; }
```

Link hangi renkte görünür? Yeşil olmasını istiyorsak `!important` kullanmadan ne yaparız?

**Cevap:** **Kırmızı.** Özgüllük puanları:

| Seçici | Puan |
| :--- | :--- |
| `nav ul li a.link` | 0-1-4 |
| `nav .link` | 0-1-1 |
| `#menu a` | 1-0-1 |

ID sütunu en önemli sütundur: dört öğe seçicisi bile tek bir ID'yi yenemez. Yeşil için seçiciye ID eklenebilir: `#menu ul li a.link` (1-1-3).

**Tartışma notu:** "Yeşil kural en uzun seçici, neden kazanmıyor?" Uzunluk değil, sütunlar önemlidir.

---

### Soru 3: Bu kural neden hiç çalışmıyor? (bozuk kod)

```css
h1,
.baslik:hoverr,
p {
  color: navy;
}
```

Sayfadaki `h1` ve `p` öğeleri lacivert olmuyor. Neden?

**Cevap:** `:hoverr` geçersiz bir sözde sınıftır (doğrusu `:hover`). Bir seçici listesindeki **tek bir geçersiz seçici bütün kuralı geçersiz kılar**; `h1` ve `p` de stillenmez. Çözüm: yazım hatasını düzeltmek ya da kuralları ayırmak.

**Tartışma notu:** CSS hata mesajı vermez; DevTools'ta bu kural hiç görünmez. Burada iki ders var: W3C CSS Validator kullanmak ve sorunu en küçük örneğe indirmek.

---

### Soru 4: Paragraflar arasında kaç piksel boşluk var?

```css
.bir { margin-bottom: 40px; }
.iki { margin-top: 25px; }
```

```html
<p class="bir">Birinci paragraf</p>
<p class="iki">İkinci paragraf</p>
```

**a)** İki paragraf arasındaki boşluk kaç pikseldir?
**b)** `.iki`'nin `margin-top` değeri `-10px` yapılırsa?

**Cevap:**

- **a) 40px**, 65px değil. Dikeyde değen iki pozitif margin çöker ve büyük olan kalır.
- **b) 30px.** Biri negatifse negatif değer toplamdan çıkarılır: 40 − 10 = 30.

**Tartışma notu:** Margin çökmesi sadece dikeyde olur. Yatay margin'ler toplanır.

---

### Soru 5: Flex öğeleri kaç piksel olur?

Kap 800px genişliğinde, `gap` yok, öğelerin padding ve kenarlığı yok.

```css
.kap { display: flex; }
.a, .b { flex: 1 100px; }
.c { flex: 2 100px; }
```

`.a`, `.b` ve `.c` kaçar piksel genişliğinde olur?

**Cevap:** **225px, 225px, 350px.**

1. Önce her öğe temel boyutunu (`flex-basis`) alır: 3 × 100 = 300px.
2. Kalan alan: 800 − 300 = 500px.
3. Kalan alan 1 : 1 : 2 oranında, yani dörde bölünür: 125, 125, 250.
4. Sonuç: 100 + 125 = 225, 100 + 125 = 225, 100 + 250 = 350.

**Tartışma notu:** "Temel boyut olmasaydı?" (`flex: 1` / `flex: 2`) diye sorun. O zaman 800px doğrudan 1 : 1 : 2 bölünür: 200, 200, 400.

**Kaynak:** MDN Web Docs · Learn web development › Core (CSS styling basics, CSS text styling, CSS layout)
