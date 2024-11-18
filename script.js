let penumpang = [];

const angkotContent = document.getElementById("angkotContent");
const penumpangNameInput = document.getElementById("penumpangName");

function tambahPenumpang() {
    const namaPenumpang = penumpangNameInput.value.trim();

    if (namaPenumpang === "") {
        alert("Nama penumpang tidak boleh kosong!");
        return;
    }

    if (penumpang.includes(namaPenumpang)) {
        alert("Nama penumpang sudah ada dalam daftar!");
        return;
    }

    penumpang.push(namaPenumpang);

    updateTampilanAngkot();

    penumpangNameInput.value = "";
}

function hapusPenumpang(index) {

    const confirmDelete = confirm("Apakah Anda yakin ingin menghapus penumpang ini?");
    if (confirmDelete) {
        penumpang.splice(index, 1); 
        updateTampilanAngkot();
    }
}

function updateTampilanAngkot() {
    angkotContent.innerHTML = "";

    if (penumpang.length === 0) {
        angkotContent.innerHTML = "<p>Isi angkot masih kosong</p>";
    } else {

        penumpang.forEach(function(nama, index) {
            const penumpangDiv = document.createElement("div");
            penumpangDiv.textContent = nama;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.marginLeft = "10px";
            deleteButton.onclick = function() {
                hapusPenumpang(index); 
            };

            penumpangDiv.appendChild(deleteButton);
            angkotContent.appendChild(penumpangDiv);
        });
    }
}

document.getElementById("masukBtn").addEventListener("click", tambahPenumpang);

penumpangNameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        tambahPenumpang();
    }
});
