function buat() {
    const teks = document.getElementById("teks").value.trim();
    if (!teks) {
        alert("Masukkan teks terlebih dahulu!");
        return;
    }
    const encodedTeks = encodeURIComponent(teks);
    const apiUrl = `https://api.caliph.biz.id/api/nuliskanan?text=${encodedTeks}&apikey=410b4bf81ca44e3b`;
    
    document.querySelector('#hasil').innerHTML = `<img src="${apiUrl}" alt="hasil.png">`;
}