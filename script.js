let benzin = 45.64,
  dizel = 45.53,
  lpg = 23.76;
const altSatir = "\r\n"; //alt satıra geçmek için kullanılır
let yakitTuru = prompt(
  "1-Benzin" +
    altSatir +
    "2-Dizel" +
    altSatir +
    "3-LPG" +
    altSatir +
    "Lütfen almak istediğiniz yakıt türünü seçiniz."
);

if (yakitTuru == 1 || yakitTuru == 2 || yakitTuru == 3) {
  let yakitLitre = +prompt("Kaç litre yakıt alacaksınız?");
  let bakiye = +prompt("Lütfen bakiyenizi giriniz.");

  if (yakitTuru == 1) {
    let tutar = yakitLitre * benzin;
    if (tutar <= bakiye) {
      alert(
        "Yakıt Türü: " +
          yakitTuru +
          altSatir +
          "Litre miktarı: " +
          yakitLitre +
          altSatir +
          "Toplam Tutar: " +
          tutar.toFixed(2) +
          altSatir +
          "Kalan Bakiye: " +
          (bakiye - tutar)
      );
    } else {
      alert("Bakiye yetersiz."+altSatir+"Eksik Tutar: "+(tutar-bakiye));
    }
  } else if (yakitTuru == 2) {
    let tutar = yakitLitre * dizel;
    if (tutar <= bakiye) {
      alert(
        "Yakıt Türü: " +
          yakitTuru +
          altSatir +
          "Litre miktarı: " +
          yakitLitre +
          altSatir +
          "Toplam Tutar: " +
          tutar.toFixed(2) +
          altSatir +
          "Kalan Bakiye: " +
          (bakiye - tutar)
      );
    } else {
      alert("Bakiye yetersiz." + altSatir + "Eksik Tutar: " + (tutar - bakiye));
    }
  } else if (yakitTuru == 3) {
    let tutar = yakitLitre * lpg;
    if (tutar <= bakiye) {
      alert(
        "Yakıt Türü: " +
          yakitTuru +
          altSatir +
          "Litre miktarı: " +
          yakitLitre +
          altSatir +
          "Toplam Tutar: " +
          tutar.toFixed(2) +
          altSatir +
          "Kalan Bakiye: " +
          (bakiye - tutar)
      );
    } else {
      alert("Bakiye yetersiz." + altSatir + "Eksik Tutar: " + (tutar - bakiye));
    }
  }
} else {
  alert("Yanlış işlem yaptınız.");
}
