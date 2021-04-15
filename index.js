function hitungnilai (nilai1, nilai2) {
    return nilai1 + nilai2
}

const hasil = hitungnilai(12, 8)
//console.log(hasil)

const buatnasi = (beras, air) => {
    if (beras) {
        console.log('beras ok')
    }else{
        console.log('mohon masukan beras')
    }
    if (air) {
        console.log('air')
    }else{
        console.log('masukkan air')
    }
}

buatnasi()