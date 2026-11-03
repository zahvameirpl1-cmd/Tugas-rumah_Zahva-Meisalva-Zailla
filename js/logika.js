// ==========================================
// SOAL NO 1: ganjilGenap (Sudah dikerjakan sebelumnya)
// ==========================================
function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}
console.log("--- Uji Soal 1 ---");
console.log(ganjilGenap(7));  // "ganjil"
console.log(ganjilGenap(12)); // "genap"
console.log(ganjilGenap(0));  // "genap"


// ==========================================
// SOAL NO 2: celsiusKeFahrenheit
// Ketentuan: Menggunakan Arrow Function
// ==========================================
const celsiusKeFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
};

console.log("--- Uji Soal 2 ---");
console.log(celsiusKeFahrenheit(0));   // 32
console.log(celsiusKeFahrenheit(100)); // 212
console.log(celsiusKeFahrenheit(-40)); // -40


// ==========================================
// SOAL NO 3: nilaiTerbesar
// Ketentuan: Menggunakan if dan &&
// ==========================================
function nilaiTerbesar(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log("--- Uji Soal 3 ---");
console.log(nilaiTerbesar(5, 9, 2));     // 9
console.log(nilaiTerbesar(80, 75, 80));   // 80
console.log(nilaiTerbesar(-3, -7, -1));   // -1


// ==========================================
// SOAL NO 4: tahunKabisat
// Ketentuan: Habis dibagi 4 TAPI tidak habis dibagi 100, ATAU habis dibagi 400
// ==========================================
function tahunKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("--- Uji Soal 4 ---");
console.log(tahunKabisat(2024)); // true
console.log(tahunKabisat(2026)); // false
console.log(tahunKabisat(1900)); // false
console.log(tahunKabisat(2000)); // true


// ==========================================
// SOAL NO 5: hargaSetelahDiskon
// Ketentuan: Min 200rb diskon 20%, Min 100rb diskon 10%, kurang dari itu 0%
// ==========================================
function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total - (total * 0.20); // Diskon 20%
    } else if (total >= 100000) {
        return total - (total * 0.10); // Diskon 10%
    } else {
        return total; // Tanpa diskon
    }
}

console.log("--- Uji Soal 5 ---");
console.log(hargaSetelahDiskon(250000)); // 200000
console.log(hargaSetelahDiskon(100000)); // 90000
console.log(hargaSetelahDiskon(75000));  // 75000