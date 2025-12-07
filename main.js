let umur = document.getElementById("umur");
let hasil = document.getElementById("hasil");

function cekUmur() {
  // Mengosongkan id hasil dulu
  hasil.innerHTML = "";

  if (umur.value >= 17) {
    let newParagraph = document.createElement("p"); // membuat elemen p di html
    newParagraph.innerHTML = "Kamu boleh bikin KTP!"; // isi p tersebut
    hasil.appendChild(newParagraph); // menambah p ke hasil
    document.body.style.backgroundColor = "green"; //mengubah warna bg jadi hijau
  } else {
    let newParagraph = document.createElement("p"); // membuat elemen p di html
    newParagraph.innerHTML = "Kamu tidak boleh bikin KTP!"; // isi p tersebut
    hasil.appendChild(newParagraph); // menambah p ke hasil
    document.body.style.backgroundColor = "red"; // mengubah warna bg jadi merah
  }
}
