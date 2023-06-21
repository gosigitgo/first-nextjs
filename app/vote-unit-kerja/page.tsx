import {InformationCircleIcon, Square3Stack3DIcon, SquaresPlusIcon} from '@heroicons/react/20/solid'
import PegawaiVote from './pegawai_vote'
import BadgeVote1 from './badge_vote1'

export const metadata = {
    title: '.: Voting Tingkat Unit Kerja | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

export default function Page() {
    return (
        <div>
            <BadgeVote1 />
            <div className="border-dotted rounded-lg">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                        <h2
                            className="text-2xl font-bold leading-7 text-teal-800 sm:truncate sm:text-2xl sm:tracking-tight">
                            Pemilihan Hero of The Month
                        </h2>
                        <div
                            className="flex text-sm text-bold text-cyan-500">
                            <div className="py-1">
                                <InformationCircleIcon
                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-cyan-400"
                                    aria-hidden="true"/>
                            </div>
                            <div className='py-1'>
                                <p>Pilihlah pegawai yang menurut Anda paling menggambarkan perilaku BerAKHLAK !</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-auto-fit-lg gap-4 py-5 -z-100 mt-2">
                    <PegawaiVote
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={1}
                        gambar="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4f833245971cb326/63a46e8e1aef5b627a47ae3c/ronaldoalnassrmarca.jpg?auto=webp&format=pjpg&width=1200&quality=60"/>
                    <PegawaiVote
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan Sumber Daya Manusia Kesehatan Kementerian Kesehatan Republik Indonesia"
                        no={2}
                        gambar="/images/photo.png"/>
                    <PegawaiVote
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={3}
                        gambar="/images/user.png"/>
                </div>
            </div>
        </div>
    )
}
