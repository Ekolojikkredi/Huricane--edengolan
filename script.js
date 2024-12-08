// Sayfada gösterilecek içerik için fonksiyon
function showPage(page) {
    let content = '';

    // Kayıt Ol butonuna tıklandığında okul kaydı veya öğrenci kaydı seçimi yapılacak
    if (page === 'kayit') {
        content = `
            <h2>Kayıt Ol</h2>
            <button onclick="showPage('okul-kaydi')">Okul Kaydı</button>
            <button onclick="showPage('ogrenci-kaydi')">Öğrenci Kaydı</button>
        `;
    }

    // Okul kaydı sayfası
    else if (page === 'okul-kaydi') {
        content = `
            <h2>Okul Kaydı</h2>
            <form id="okulKaydiForm">
                <label for="okulAdi">Okul Adı:</label>
                <input type="text" id="okulAdi" required>
                <label for="il">İl:</label>
                <input type="text" id="il" required>
                <label for="ilce">İlçe:</label>
                <input type="text" id="ilce" required>
                <label for="sifre">Şifre:</label>
                <input type="password" id="sifre" required>
                <button type="button" onclick="saveOkulKaydi()">Kaydet</button>
            </form>
        `;
    }

    // Öğrenci kaydı sayfası
    else if (page === 'ogrenci-kaydi') {
        content = `
            <h2>Öğrenci Kaydı</h2>
            <form id="ogrenciKaydiForm">
                <label for="isim">Ad:</label>
                <input type="text" id="isim" required>
                <label for="soyisim">Soyad:</label>
                <input type="text" id="soyisim" required>
                <label for="okulNo">Okul Numarası:</label>
                <input type="text" id="okulNo" required>
                <label for="email">E-Posta:</label>
                <input type="email" id="email" required>
                <label for="telefon">Telefon Numarası:</label>
                <input type="text" id="telefon" required>
                <label for="sinif">Sınıf:</label>
                <input type="text" id="sinif" required>
                <label for="il">İl:</label>
                <input type="text" id="il" required>
                <label for="ilce">İlçe:</label>
                <input type="text" id="ilce" required>
                <button type="button" onclick="saveOgrenciKaydi()">Kaydet</button>
            </form>
        `;
    }

    // Veri girişine tıklandığında okul ismi ve şifreyi isteyecek
    else if (page === 'veri-giris') {
        content = `
            <h2>Veri Girişi</h2>
            <form id="veriGirisForm">
                <label for="okulAdi">Okul Adı:</label>
                <input type="text" id="okulAdi" required>
                <label for="okulSifre">Okul Şifresi:</label>
                <input type="password" id="okulSifre" required>
                <button type="button" onclick="verifyOkulSifre()">Giriş Yap</button>
            </form>
        `;
    }

    // Atık türü ve ağırlığı girecek form
    else if (page === 'veri-giris-form') {
        content = `
            <h2>Atık Girişi</h2>
            <form id="atıkForm">
                <label for="atikTuru">Atık Türü:</label>
                <select id="atikTuru" required>
                    <option value="plastik">Plastik</option>
                    <option value="kagit">Kağıt</option>
                    <option value="cam">Cam</option>
                    <option value="metal">Metal</option>
                </select>
                <label for="atikAgirligi">Atık Ağırlığı (kg):</label>
                <input type="number" id="atikAgirligi" required>
                <label for="kayitYapan">Kaydı Yapan:</label>
                <input type="text" id="kayitYapan" required>
                <button type="button" onclick="saveAtik()">Kaydet</button>
            </form>
        `;
    }

    // Veri görüntüleme sayfası
    else if (page === 'veri-goruntuleme') {
        content = `
            <h2>Veri Görüntüle</h2>
            <form id="veriGoruntulemeForm">
                <label for="okulNumarasi">Okul Numarası:</label>
                <input type="text" id="okulNumarasi" required>
                <label for="email">E-Posta:</label>
                <input type="email" id="email" required>
                <button type="button" onclick="gosterVeri()">Verileri Görüntüle</button>
            </form>
            <div id="gosterilenVeri"></div>
        `;
    }

    document.getElementById("page-content").innerHTML = content;
}

// Okul kaydını kaydetme işlemi
function saveOkulKaydi() {
    let okulAdi = document.getElementById("okulAdi").value;
    let il = document.getElementById("il").value;
    let ilce = document.getElementById("ilce").value;
    let sifre = document.getElementById("sifre").value;

    if (okulAdi && il && ilce && sifre) {
        alert("Okul kaydı başarılı!");
        showPage('kayit');
    } else {
        alert("Lütfen tüm alanları doldurun!");
    }
}

// Öğrenci kaydını kaydetme işlemi
function saveOgrenciKaydi() {
    let isim = document.getElementById("isim").value;
    let soyisim = document.getElementById("soyisim").value;
    let okulNo = document.getElementById("okulNo").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let sinif = document.getElementById("sinif").value;
    let il = document.getElementById("il").value;
    let ilce = document.getElementById("ilce").value;

    if (isim && soyisim && okulNo && email && telefon && sinif && il && ilce) {
        alert("Öğrenci kaydı başarılı!");
        showPage('kayit');
    } else {
        alert("Lütfen tüm alanları doldurun!");
    }
}

// Okul şifresini doğrulama
function verifyOkulSifre() {
    let okulAdi = document.getElementById("okulAdi").value;
    let sifre = document.getElementById("okulSifre").value;

    // Okul bilgilerini doğrulamak için basit bir kontrol
    if (okulAdi === "OkulAdı" && sifre === "1234") {
        showPage('veri-giris-form');
    } else {
        alert("Yanlış okul adı veya şifre!");
    }
}

// Atık bilgilerini kaydetme
function saveAtik() {
    let atikTuru = document.getElementById("atikTuru").value;
    let atikAgirligi = document.getElementById("atikAgirligi").value;
    let kayitYapan = document.getElementById("kayitYapan").value;

    if (atikTuru && atikAgirligi && kayitYapan) {
        alert("Atık kaydedildi!");
        showPage('kayit');
    } else {
        alert("Lütfen tüm alanları doldurun!");
    }
}

// Verileri görüntüleme
function gosterVeri() {
    let okulNumarasi = document.getElementById("okulNumarasi").value;
    let email = document.getElementById("email").value;

    // Burada, öğrenciye ait veriler verilmişse görüntülenebilir
    // Örnek olarak sabit bir veri göstereceğiz
    document.getElementById("gosterilenVeri").innerHTML = `
        <p>Öğrenci Numarası: ${okulNumarasi}</p>
        <p>Email: ${email}</p>
        <p>Atık Puanı: 10</p>
        <p>Geçmiş Teslimatlar: 5</p>
    `;
}
