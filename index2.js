const nilai = 80
let nilaihuruf, ket
// logika percabangan

if (nilai >= 85) {
    nilaihuruf = 'A'
    Ket = 'sangat baik'
}else if (nilai >= 75) {
    nilaihuruf = 'B'
    ket = 'baik'
}else if (nilai >= 65) {
    nilaihuruf = 'C'
    ket = 'cukup'
}else if (nilai >= 55) {
    nilaihuruf = 'D'
    ket = 'Buruk'
}else{
    nilaihuruf = 'E'
    ket = 'sangat buruk'
}
console.log('nilai anda '+nilaihuruf +' (' + ket +')')