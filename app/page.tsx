import PegawaiVotePusat from "./vote-pusat/pegawai_vote_pusat"
export const metadata = {
    title: '.: Halaman Utama | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

export default function Page() {
    return (
      <div>
        {/* <div className="flex w-full font-weight text-2xl text-rose-700 mt-2 mb-4 sm:text-4xl">Selamat Atas Prestasimu ! 🎉</div>
        <div className="bg-rose-300 border-dotted border border-slate-400 rounded-lg px-2 py-2">
            <div>Penjelasan Bhakti Karya Husada kini Bertransformasi (Infografis)</div>
            <div>Nampilin Tahapan& Jadwal HOTM (4 tahapan)</div>
            <div>Nampilin Pemenang BKH Periode-Periode Sebelumnya</div>
        </div> */}
        <div className="flex w-full font-weight text-2xl text-rose-700 mt-2 mb-4 sm:text-4xl">Selamat Atas Prestasimu ! 🎉</div>
        <div className="flex w-full font-weight text-xl text-cyan-700 mt-2 mb-4 sm:text-xl">Daftar&nbsp;<strong>Hero Of The Month</strong>&nbsp;Periode Triwulan III Tahun 2023</div>
        <div className="grid grid-auto-fit-lg gap-4 py-5 -z-100 mt-2">
                    <PegawaiVotePusat
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={1}
                        gambar="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4f833245971cb326/63a46e8e1aef5b627a47ae3c/ronaldoalnassrmarca.jpg?auto=webp&format=pjpg&width=1200&quality=60"/>
                    <PegawaiVotePusat
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan Sumber Daya Manusia Kesehatan Kementerian Kesehatan Republik Indonesia"
                        no={2}
                        gambar="/images/photo.png"/>
                    <PegawaiVotePusat
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={3}
                        gambar="/images/user.png"/>
                    <PegawaiVotePusat
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={3}
                        gambar="/images/1.png"/>
                    <PegawaiVotePusat
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={3}
                        gambar="/images/5.png"/>
                    <PegawaiVotePusat
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={3}
                        gambar="/images/6.png"/>
                    <PegawaiVotePusat
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={3}
                        gambar="/images/7.png"/>
                    <PegawaiVotePusat
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={3}
                        gambar="/images/photo.png"/>
                </div>
      </div>
    )
}
