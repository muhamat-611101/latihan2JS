
document.getElementById('registration').addEventListener('submit', tambahData)
document.getElementById('user-list').addEventListener('click', hapusData)

const namaLengkap   = document.querySelector('#nama')
const jenisKelamin  = document.querySelector('#jenis_kelamin')
const noHp          = document.querySelector('#no_hp')
const alamatLengkap = document.querySelector('#alamat')

let no  = 0

function tambahData(e){
    no = no + 1

    const userList = document.querySelector('#user-list')
    const tr       = document.createElement('tr')
    const No       = document.createElement('td')
    const Nama   = document.createElement('td')
    const Jk     = document.createElement('td')
    const Hp     = document.createElement('td')
    const Alamat = document.createElement('td')
    const btndel   = document.createElement('td')

    No.appendChild(document.createTextNode(no))
    Nama.appendChild(document.createTextNode(namaLengkap.value))
    Jk.appendChild(document.createTextNode(jenisKelamin.value))
    Hp.appendChild(document.createTextNode(noHp.value))
    Alamat.appendChild(document.createTextNode(alamatLengkap.value))

    const del      = document.createElement('a')
    del.className  = 'delete-item secondary-content'
    del.innerHTML  = '<i class="fas fa-trash-alt btn btn-danger btn-sm"></i>'
    btndel.appendChild(del)

    tr.appendChild(No)
    tr.appendChild(Nama)
    tr.appendChild(Jk)
    tr.appendChild(Hp)
    tr.appendChild(Alamat)
    tr.appendChild(btndel)

    userList.appendChild(tr)
    namaLengkap.value   = ''
    jenisKelamin.value  = ''
    noHp.value          = ''
    alamatLengkap.value = ''

    e.preventDefault()
}

function hapusData(e){
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Hapus data?'))
            e.target.parentElement.parentElement.parentElement.remove()
    }
}



