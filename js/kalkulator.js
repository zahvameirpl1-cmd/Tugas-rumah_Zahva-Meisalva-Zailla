function hitungRataRata(tugas, uts, uas) {
    return (tugas + uts + uas) / 3;
}

function predikat(nilaiRataRata) {
    if (nilaiRataRata >= 85) {
        return "A";
    } else if (nilaiRataRata >= 75) {
        return "B";
    } else if (nilaiRataRata >= 60) {
        return "C";
    } else if (nilaiRataRata >= 45) {
        return "D";
    } else {
        return "E";
    }
}

document.getElementById("btnHitung").addEventListener("click", function() {
    const nilaiTugas = parseFloat(document.getElementById("tugas").value) || 0;
    const nilaiUTS = parseFloat(document.getElementById("uts").value) || 0;
    const nilaiUAS = parseFloat(document.getElementById("uas").value) || 0;

    const rataRata = hitungRataRata(nilaiTugas, nilaiUTS, nilaiUAS);
    const hasilPredikat = predikat(rataRata);

    // Format output disesuaikan satu baris: Rata-rata X, predikat Y
    document.getElementById("hasil").innerText = 
        `Rata-rata ${rataRata.toFixed(1)}, predikat ${hasilPredikat}`;
});