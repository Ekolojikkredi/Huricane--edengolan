// Sayfa geçişleri için fonksiyon
function showPage(page) {
    var content = '';

    switch (page) {
        case 'kayit':
            content = `
                <h2>Okul Kayıt Formu</h2>
                <form id="okul-kayit-form" onsubmit="return okulKaydiYap()">
                    <label for="okul-isimi">Okul Adı:</label>
                    <input type="text" id="okul-isimi" required><br>
                    <label for="okul-il">İl:</label>
                    <input type="text" id="okul-il" required><br>
                    <label for="okul-ilce">İlçe:</label>
                    <input type="text" id="okul-ilce" required><br>
                    <label for="okul-sifre">Okul Şifresi:</label>
                    <input type="password" id="okul-sifre" required><br>
                    <button type="submit">Okul Kaydını Tamamla</button>
                </form>
            `;
            break;
        case 'ogrenci-kaydi':
            content = `
                <h2>Öğrenci Kayıt Formu</h2>
                <form id="ogrenci-kayit-form" onsubmit="return ogrenciKaydiYap()">
                    <label for="ogrenci-ad">Adı:</label>
                    <input type="text" id="ogrenci-ad" required><br>
                    <label for="ogrenci-soyad">Soyadı:</label>
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

    alert("Öğrenci kaydınız başarıyla tamamlandı.");
    showPage('kayit'); // Kaydı tamamladıktan sonra ana sayfaya dön

    return false;
}

// Veri Görüntüleme işlemi
document.getElementById("veri-goruntuleme-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var ogrenciNumara = document.getElementById("ogrenci-numara").value;

    var ogrenciAd = localStorage.getItem("ogrenciAd");
    var ogrenciSoyad = localStorage.getItem("ogrenciSoyad");
    var ogrenciNumaraLocal = localStorage.getItem("ogrenciNumara");
    var ogrenciEmail = localStorage.getItem("ogrenciEmail");

    if (ogrenciNumara === ogrenciNumaraLocal && email === ogrenciEmail) {
        document.getElementById("veri-goruntuleme-sonuc").innerHTML = `
            <h3>Öğrenci Bilgileri:</h3>
            <p>Adı: ${ogrenciAd}</p>
            <p>Soyadı: ${ogrenciSoyad}</p>
            <p>Öğrenci Numarası: ${ogrenciNumaraLocal}</p>
            <p>E-posta: ${ogrenciEmail}</p>
        `;
    } else {
        document.getElementById("veri-goruntuleme-sonuc").innerHTML = "<p>Bu bilgilere erişim izniniz yok.</p>";
    }
});

// Geri Dönüşüm Nedir ve Ekolojik Kredi Nedir açıklamaları
function ekolojikKrediNedir() {
    return `
        <h2>Ekolojik Kredi Nedir?</h2>
        <p>Ekolojik kredi, bireylerin veya okulların çevresel sürdürülebilirlik adına yaptığı geri dönüşüm ve doğa dostu faaliyetler için ödüllendirildiği bir sistemdir.
        Bu sistemde, geri dönüştürülebilir atıklar toplanarak puanlara dönüştürülür ve bu puanlar çevreye olan katkıya göre değerlendirilir. Bu şekilde çevre bilincini artırmayı ve sürdürülebilir yaşamı teşvik etmeyi amaçlar.</p>
    `;
}

function geriDonusumNedir() {
    return `
        <h2>Geri Dönüşüm Nedir?</h2>
        <p>Geri dönüşüm, kullanılmaz hale gelmiş ürünlerin yeniden kullanılabilir hale getirilmesi sürecidir. 
        Bu süreç, atıkların toplanarak işlenmesi ve yeniden üretim için malzeme haline getirilmesiyle gerçekleşir.
        Geri dönüşüm, doğal kaynakların korunmasına yardımcı olur, enerji tasarrufu sağlar ve çevreyi kirleten atıkların miktarını azaltır.</p>
    `;
}

// Hazırlayanlar ve iletişim bilgileri
function hazirlayanlar() {
    return `
        <h2>Hazırlayanlar</h2>
        <p>Danışman Öğretmen: Osman Onuk</p>
        <p>Öğrenciler:</p>
        <ul>
            <li>Muhammedcan Arslanparçası</li>
            <li>Bilal Yiğit Tezcan</li>
            <li>Yağız Efe Yılmaz</li>
        </ul>
    `;
}

function bizeUlasin() {
    return `
        <h2>Bize Ulaşın</h2>
        <p>Email: <a href="mailto:ekolojikkreditubitak@gmail.com">ekolojikkreditubitak@gmail.com</a></p>
        <p>Okul Adresi: Torbalı Anadolu Lisesi, İzmir, Torbalı</p>
        <p>YouTube Kanalı: <a href="https://youtube.com/@ekolojikkredi?si=esEweBsfz6l6LGVU" target="_blank">Ekolojik Kredi YouTube Kanalı</a></p>
    `;
}

// Sayfa Geçişi Yapma Fonksiyonu
function showPage(page) {
    var content = '';
    
    switch (page) {
        case 'ekolojik-kredi':
            content = ekolojikKrediNedir();
            break;
        case 'geri-donusum':
            content = geriDonusumNedir();
            break;
        case 'hazirlayanlar':
            content = hazirlayanlar();
            break;
        case 'bize-ulasin':
            content = bizeUlasin();
            break;
        case 'kayit':
            content = `
                <h2>Okul Kayıt Formu</h2>
                <form id="okul-kayit-form" onsubmit="return okulKaydiYap()">
                    <label for="okul-isimi">Okul Adı:</label>
                    <input type="text" id="okul-isimi" required><br>
                    <label for="okul-il">İl:</label>
                    <input type="text" id="okul-il" required><br>
                    <label for="okul-ilce">İlçe:</label>
                    <input type="text" id="okul-ilce" required><br>
                    <label for="okul-sifre">Okul Şifresi:</label>
                    <input type="password" id="okul-sifre" required><br>
                    <button type="submit">Okul Kaydını Tamamla</button>
                </form>
            `;
            break;
        case 'ogrenci-kaydi':
            content = `
                <h2>Öğrenci Kayıt Formu</h2>
                <form id="ogrenci-kayit-form" onsubmit="return ogrenciKaydiYap()">
                    <label for="ogrenci-ad">Adı:</label>
                    <input type="text" id="ogrenci-ad" required><br>
                    <label for="ogrenci-soyad">Soyadı:</label>
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
        default:
            content = "<h2>Sayfa Bulunamadı</h2><p>Seçilen sayfa bulunamadı.</p>";
            break;
    }
    document.getElementById("page-content").innerHTML = content;
}
