import {InformationCircleIcon} from '@heroicons/react/20/solid'
import PegawaiVotePusat from './pegawai_vote_pusat'
import BadgeVote2 from './badge_vote2'

export const metadata = {
    title: '.: Voting Tingkat Kementerian | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

export default function Page() {
    return (
        <div>
            <BadgeVote2 />
            <div className="border-dotted border border-slate-400 rounded-lg border-0">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                        <h2
                            className="text-2xl font-bold leading-7 text-teal-800 sm:truncate sm:text-2xl sm:tracking-tight">
                            Pemilihan Hero of The Month
                        </h2>
                        <div
                            className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-bold text-cyan-500">
                                <InformationCircleIcon
                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-cyan-400"
                                    aria-hidden="true"/>
                                Pilihlah pegawai yang menurut Anda paling menggambarkan perilaku BerAKHLAK !
                            </div>

                        </div>
                    </div>
                </div>
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
        </div>
    )
}
