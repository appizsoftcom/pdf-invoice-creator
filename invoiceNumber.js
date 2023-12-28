const fs = require("fs"); // Fatura numarasını tutacak dosyanın yolunu belirleyin
const faturaNumarasiDosyaYolu = "fatura_numarasi.txt"; // Eğer dosya yoksa oluşturun ve 1 ile başlatın
if (!fs.existsSync(faturaNumarasiDosyaYolu)) {
  fs.writeFileSync(faturaNumarasiDosyaYolu, "1", "utf-8");
}
// Fatura numarasını okuyun
let faturaNumarasi = parseInt(
  fs.readFileSync(faturaNumarasiDosyaYolu, "utf-8")
);
// Yeni bir fatura oluşturulduğunda numarayı bir artırın
 faturaNumarasi++;  // Yeni numarayı dosyaya yazın
fs.writeFileSync(faturaNumarasiDosyaYolu, faturaNumarasi.toString(), "utf-8");
// Oluşturulan fatura numarasını kullanabilirsiniz.
 console.log('Yeni Fatura Numarası:', faturaNumarasi);
