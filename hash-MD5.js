const crypto = require("crypto");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function buatHashMD5(nama, email, noHp) {
    const dataUser = nama + email + noHp;
    return crypto.createHash("md5").update(dataUser).digest("hex");
}

function tanya(pertanyaan) {
    return new Promise((resolve) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    });
}

async function main() {
    console.log("=== PROGRAM CEK PERUBAHAN DATA PROFIL USER ===");

    console.log("\nMasukkan Data User Awal");
    const namaAwal = await tanya("Nama  : ");
    const emailAwal = await tanya("Email : ");
    const noHpAwal = await tanya("No HP : ");

    const hashAwal = buatHashMD5(namaAwal, emailAwal, noHpAwal);

    console.log("\n=== HASH DATA AWAL ===");
    console.log("Nama  :", namaAwal);
    console.log("Email :", emailAwal);
    console.log("No HP :", noHpAwal);
    console.log("Hash MD5 Awal :", hashAwal);

    console.log("\nMasukkan Data User Baru");
    const namaBaru = await tanya("Nama  : ");
    const emailBaru = await tanya("Email : ");
    const noHpBaru = await tanya("No HP : ");

    const hashBaru = buatHashMD5(namaBaru, emailBaru, noHpBaru);

    console.log("\n=== HASIL PERBANDINGAN DATA ===");
    console.log("Hash MD5 Lama :", hashAwal);
    console.log("Hash MD5 Baru :", hashBaru);

    if (hashAwal === hashBaru) {
        console.log("Status : Data profil tidak berubah");
    } else {
        console.log("Status : Data profil telah berubah atau dimodifikasi");
    }

    rl.close();
}

main();