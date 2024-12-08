// Sayfa İçeriği Değiştir
function showPage(page) {let content = "";
    switch (page) {
        case 'ekolojik-kredi':
            content = `
                <h2>Ekolojik Kredi Nedir?</h2>
                <p>Ekolojik kredi, çevreye duyarlı davranışlar sergileyen bireylerin, toplulukların ya da okulların çevreye verdiği zararı azaltmak adına aldıkları puanları temsil eder. Bu sistem, geri dönüşüm, atık yönetimi, enerji tasarrufu ve sürdürülebilir uygulamaları teşvik ederek çevre bilincini artırmayı amaçlar. 
                Ekolojik kredi, hem bireysel hem de toplumsal düzeyde çevre dostu uygulamaların teşvik edilmesi ve yaygınlaştırılması için önemlidir. Her birey ya da okul, yaptıkları çevre dostu davranışlarla ekolojik kredi kazanır ve bu krediler belirli ödüllerle değiştirilebilir.</p>
            `;
            break;
        case 'geri-donusum':
            content = `
                <h2>Geri Dönüşüm Nedir?</h2>
                <p>Geri dönüşüm, atık malzemelerin yeniden işlenerek, aynı ya da benzer türde yeni ürünlere dönüştürülmesidir. Bu süreç, doğal kaynakların korunmasına, çevre kirliliğinin azaltılmasına ve enerji tasarrufuna yardımcı olur. Örneğin, kağıt, plastik, cam ve metal gibi malzemeler geri dönüştürülerek yeniden kullanılabilir. 
                Geri dönüşüm, doğanın dengesini koruma noktasında önemli bir adımdır. Çevreye zararlı atıkların yeniden değerlendirilmesi, insanların atık üretme alışkanlıklarını değiştirmelerine ve doğayı koruma bilincini geliştirmelerine katkı sağlar. Her bir birey, evlerinde geri dönüşüm uygulamaları yaparak bu süreçte aktif bir rol oynayabilir. </p>
            `;
            break;
        case 'hazirlayanlar':
            content = `
                <h2>Hazırlayanlar</h2>
                <p>Danışman Öğretmen: Osman Onuk</p>
                <p>Öğrenciler: Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
            `;
            break;
        case 'bize-ulasin':
            content = `
                <h2>Bize Ulaşın</h2>
                <p>Email: <a href="mailto:ekolojikkreditubitak@gmail.com">ekolojikkreditubitak@gmail.com</a></p>
                <p>Adres: Torbalı Anadolu Lisesi, İzmir, Torbalı</p>
                <p>YouTube Kanalı: <a href="https://youtube.com/@ekolojikkredi?si=esEweBsfz6l6LGVU" target="_blank">Ekolojik Kredi YouTube Kanalı</a></p>
            `;
            break;
        case 'kayit':
            content = `
                <h2>Okul Kayıt Formu</h2>
                <form id="okul-form">
                    <label for="okul-isimi">Okul Adı:</label>
                    <input type="text" id="okul-isimi" required><br>
                    <label for="okul-il">İl:</label>
                    <input type="text" id="okul-il" required><br>
                    <label for="okul-ilce">İlçe:</label>
                    <input type="text" id="okul-ilce" required><br>
                    <label for="okul-sifre">Şifre:</label>
                    <input type="password" id="okul-sifre" required><br>
                    <button type="submit">Okul Kaydını Tamamla</button>
                </form>
            `;
            break;
        case 'ogrenci-kaydi':
            content = `
                <h2>Öğrenci Kayıt Formu</h2>
                <form id="ogrenci-form">
                    <label for="ogrenci-ad">Öğrenci Adı:</label>
                    <input type="text" id="ogrenci-ad" required><br>
                    <label for="ogrenci-soyad">Öğrenci Soyadı:</label>
                    <input type="text" id="ogrenci-soyad" required><br>
                    <label for="ogrenci-numara">Öğrenci Numarası:</label>
                    <input type="text" id="ogrenci-numara" required><br>
                    <label for="ogrenci-email">E-posta:</label>
                    <input type="email" id="ogrenci-email" required><br>
                    <label for="ogrenci-telefon">Telefon:</label>
                    <input type="tel" id="ogrenci-telefon" required><br>
                    <label for="ogrenci-okul-ad">Okul Adı:</label>
                    <input type="text" id="ogrenci-okul-ad" required><br>
                    <label for="ogrenci-il">İl:</label>
                    <input type="text" id="ogrenci-il" required><br>
                    <label for="ogrenci-ilce">İlçe:</label>
                    <input type="text" id="ogrenci-ilce" required><br>
                    <label for="ogrenci-sinif">Sınıf:</label>
                    <input type="text" id="ogrenci-sinif" required><br>
                    <button type="submit">Öğrenci Kaydını Tamamla</button>
                </form>
            `;
            break;
        case 'veri-goruntuleme':
            content = `
                <h2>Veri Görüntüleme</h2>
                <form id="veri-goruntuleme-form">
                    <label for="email">E-posta:</label>
                    <input type="email" id="email" required><br>
                    <label for="ogrenci-numara">Okul Numarası:</label>
                    <input type="text" id="ogrenci-numara" required><br>
                    <button type="button" onclick="gosterPuanlar()">Puanları Göster</button>
                </form>
                <div id="puanlar"></div>
            `;
            break;
        case 'veri-giris':
            content = `
                <h2>Veri Girişi</h2>
                <form id="veri-giris-form">
                    <label for="okul-isimi">Okul Adı:</label>
                    <input type="text" id="okul-isimi" required><br>
                    <label for="okul-sifre">Okul Şifresi:</label>
                    <input type="password" id="okul-sifre" required><br>
                    <button type="submit">Veri Girişi Yap</button>
                </form>
            `;
            break;
    }
    document.getElementById('page-content').innerHTML = content;
}

function okulGiris() {
    const okulAdi = document.getElementById('okul-isimi').value;
    const okulSifre = document.getElementById('okul-sifre').value;

    if (okulAdi && okulSifre) {
        alert('Okul giriş başarılı! Şimdi öğrenci verilerini girebilirsiniz.');
        showPage('ogrenci-kaydi');
    } else {
        alert('Okul adı veya şifre eksik!');
    }
}

function gosterPuanlar() {
    const email = document.getElementById('email').value;
    const okulNumara = document.getElementById('ogrenci-numara').value;

    if (email && okulNumara) {
        document.getElementById('puanlar').innerHTML = `
            <h3>Öğrenci Puanları</h3>
            <p>E-posta: ${email}</p>
            <p>Okul Numarası: ${okulNumara}</p>
            <p>Puanlarınız: 50</p> <!-- Örnek puan değeri -->
        `;
    } else {
        alert('E-posta veya okul numarası eksik!');
    }
}
