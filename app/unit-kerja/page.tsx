import {CalendarIcon, Square3Stack3DIcon, SquaresPlusIcon, PlayCircleIcon, UsersIcon} from '@heroicons/react/20/solid'
import PegawaiCard from './pegawai_card'
import ModalQuota from './modal_quota'
import BadgeUker from './badge_uker'
import ModalPilihHotm from './modal_pilih_hotm'
import ModalPilihPegawai from './modal_pilih_pegawai'

export const metadata = {
    title: '.: Pemilihan Unit Kerja | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

export default function Page() {
    function BelumWaktunya(){
        alert('Belum Waktunya !')
    }
    return (
        <div>
            <BadgeUker/>
            <div className="border-dotted rounded-lg">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                        <h2
                            className="text-2xl font-bold leading-7 text-teal-800 sm:truncate sm:text-2xl sm:tracking-tight">
                            Hero of The Month
                        </h2>
                        <div
                            className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-bold text-lime-500">
                                <PlayCircleIcon
                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-lime-400"
                                    aria-hidden="true"/>
                                Tahapan Pemilihan Tingkat Unit Kerja (Dibuka)
                            </div>
                            <div className="mt-2 flex items-center text-sm text-bold text-red-500">
                                <CalendarIcon
                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-red-400"
                                    aria-hidden="true"/>
                                Periode Juli - September 2023
                            </div>
                            <div className="mt-2 flex items-center text-sm text-bold text-grey-500">
                                <UsersIcon
                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-grey-400"
                                    aria-hidden="true"/>
                                Kuota:&nbsp;<b>3 pegawai</b>
                                <ModalQuota/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-auto-fit-lg gap-4 py-5 -z-100 mt-4">
                    <PegawaiCard
                        nama="Cristiano Ronaldo"
                        nip="198702112010121004"
                        no={1}
                        star={210}
                        gambar="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4f833245971cb326/63a46e8e1aef5b627a47ae3c/ronaldoalnassrmarca.jpg?auto=webp&format=pjpg&width=1200&quality=60"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        nip="198702112010121004"
                        no={2}
                        star={170}
                        gambar="/images/photo.png"/>
                    <PegawaiCard
                        nama="Kaivan Akhtar Rafaeyza"
                        nip="198702112010121004"
                        no={3}
                        star={120}
                        gambar="/images/1.png"/>
                </div>
            </div>
        </div>
    )
}
