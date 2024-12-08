// Sayfa İçeriği Değiştir
function showPage(page) {
    let content = "";
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
                <form id="okul-form" onsubmit="return okulKaydiYap()">
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
                <form id="ogrenci-form" onsubmit="return ogrenciKaydiYap()">
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
                    <label for="ogrenci-okul">Okul Adı:</label>
                    <input type="text" id="ogrenci-okul" required><br>
                    <label for="ogrenci-sinif">Sınıf:</label>
                    <input type="text" id="ogrenci-sinif" required><br>
                    <label for="ogrenci-il">İl:</label>
                    <input type="text" id="ogrenci-il" required><br>
                    <label for="ogrenci-ilce">İlçe:</label>
                    <input type="text" id="ogrenci-ilce" required><br>
                    <button type="submit">Öğrenci Kaydını Tamamla</button>
                </form>
            `;
            break;
        case 'veri-giris':
            content = `
                <h2>Veri Girişi</h2>
                <form id="veri-giris-form">
                    <label for="atık-tipi">Atık Tipi:</label>
                    <input type="text" id="atık-tipi" required><br>
                    <label for="atık-ağırlık">Atık Ağırlığı (kg):</label>
                    <input type="number" id="atık-ağırlık" required><br>
                    <label for="kayıt-yapan">Kayıt Yapan Kişi:</label>
                    <input type="text" id="kayıt-yapan" required><br>
                    <button type="submit">Atık Verisini Kaydet</button>
                </form>
            `;
            break;
        case 'veri-goruntuleme':
            content = `
                <h2>Veri Görüntüleme</h2>
                <form id="veri-goruntuleme-form">
                    <label for="email">E-posta:</label>
                    <input type="email" id="email" required><br>
                    <label for="ogrenci-numara">Öğrenci Numarası:</label>
                    <input type="text" id="ogrenci-numara" required><br>
                    <button type="submit">Verileri Görüntüle</button>
                </form>
                <div id="veri-goruntuleme-sonuc"></div>
            `;
            break;
        default:
            content = "<h2>Sayfa Bulunamadı</h2><p>Seçilen sayfa bulunamadı.</p>";
            break;
    }
    document.getElementById("page-content").innerHTML = content;
}

// Okul kaydı işlemi
function okulKaydiYap() {
    var okulIsmi = document.getElementById("okul-isimi").value;
    var okulIl = document.getElementById("okul-il").value;
    var okulIlce = document.getElementById("okul-ilce").value;
    var okulSifre = document.getElementById("okul-sifre").value;

    // Okul verisini kaydetme işlemi (localStorage veya başka bir yöntemle)
    localStorage.setItem("okulIsmi", okulIsmi);
    localStorage.setItem("okulIl", okulIl);
    localStorage.setItem("okulIlce", okulIlce);
    localStorage.setItem("okulSifre", okulSifre);

    // Öğrenci kaydına geçiş
    showPage('ogrenci-kaydi');
    return false;
}

// Öğrenci kaydı işlemi
function ogrenciKaydiYap() {
    var ogrenciAd = document.getElementById("ogrenci-ad").value;
    var ogrenciSoyad = document.getElementById("ogrenci-soyad").value;
    var ogrenciNumara = document.getElementById("ogrenci-numara").value;
    var ogrenciEmail = document.getElementById("ogrenci-email").value;
    var ogrenciTelefon = document.getElementById("ogrenci-telefon").value;
    var ogrenciOkul = document.getElementById("ogrenci-okul").value;
    var ogrenciSinif = document.getElementById("ogrenci-sinif").value;
    var ogrenciIl = document.getElementById("ogrenci-il").value;
    var ogrenciIlce = document.getElementById("ogrenci-ilce").value;

    // Öğrenci verisini kaydetme işlemi (localStorage veya başka bir yöntemle)
    localStorage.setItem("ogrenciAd", ogrenciAd);
    localStorage.setItem("ogrenciSoyad", ogrenciSoyad);
    localStorage.setItem("ogrenciNumara", ogrenciNumara);
    localStorage.setItem("ogrenciEmail", ogrenciEmail);
    localStorage.setItem("ogrenciTelefon", ogrenciTelefon);
    localStorage.setItem("ogrenciOkul", ogrenciOkul);
    localStorage.setItem("ogrenciSinif", ogrenciSinif);
    localStorage.setItem("ogrenciIl", ogrenciIl);
    localStorage.setItem("ogrenciIlce", ogrenciIlce);

    alert("Öğrenci kaydı başarıyla tamamlandı!");
    showPage('kayit'); // Kayıt işlemi tamamlandığında tekrar kayit sayfasına dön
    return false;
}

// Veri görüntüleme işlemi
document.getElementById("veri-goruntuleme-form").onsubmit = function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var ogrenciNumara = document.getElementById("ogrenci-numara").value;

    // Öğrenci bilgilerini kontrol etme (localStorage'dan)
    var storedEmail = localStorage.getItem("ogrenciEmail");
    var storedNumara = localStorage.getItem("ogrenciNumara");

    if (email === storedEmail && ogrenciNumara === storedNumara) {
        document.getElementById("veri-goruntuleme-sonuc").innerHTML = `
            <h3>Öğrenci Bilgileri</h3>
            <p>Adı: ${localStorage.getItem("ogrenciAd")}</p>
            <p>Soyadı: ${localStorage.getItem("ogrenciSoyad")}</p>
            <p>Öğrenci Numarası: ${localStorage.getItem("ogrenciNumara")}</p>
            <p>Okul: ${localStorage.getItem("ogrenciOkul")}</p>
            <p>Sınıf: ${localStorage.getItem("ogrenciSinif")}</p>
        `;
    } else {
        document.getElementById("veri-goruntuleme-sonuc").innerHTML = "<p>Bilgiler eşleşmedi. Lütfen tekrar deneyin.</p>";
    }
};
