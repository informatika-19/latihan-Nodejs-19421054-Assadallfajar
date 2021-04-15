//array harus tau index

//const listnilai = ['A','B','C']
//console.log(listnilai[0])

const datamahasiswa = [
    {
        nama: 'assad all fajar',
        npm: '19421054',
        prodi: 'informatika'
    },
    {
        nama: 'assad all fajar',
        npm: '19421054',
        prodi: 'informatika'
    },
    {
        nama: 'assad all fajar',
        npm: '19421054',
        prodi: 'informatika'
    }
]
//console.log(datamahasiswa[0].nama)

for ( let i in datamahasiswa){
    console.log(datamahasiswa[i].nama + ' - '+ datamahasiswa[i].npm + '-'+ datamahasiswa[i].prodi)
}