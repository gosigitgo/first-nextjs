import {CalendarIcon, PlayCircleIcon, UsersIcon} from '@heroicons/react/20/solid'
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

export default function Page2() {
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
                    <div className="mt-5 flex lg:ml-4 lg:mt-0">
                        <span className="block ml-0 mr-3">
                            <ModalPilihHotm />
                        </span>

                        <span className="sm:ml-3">
                            <ModalPilihPegawai />
                        </span>
                    </div>
                </div>
                <div className="grid grid-auto-fit-lg gap-4 py-5 -z-100 mt-4">
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={1}
                        gambar="https://simka.kemkes.go.id/foto_pegawai/1677198452.2276_"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={2}
                        gambar="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4f833245971cb326/63a46e8e1aef5b627a47ae3c/ronaldoalnassrmarca.jpg?auto=webp&format=pjpg&width=1200&quality=60"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={3}
                        gambar="/images/photo.png"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={4}
                        gambar="/images/photo.png"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={5}
                        gambar="/images/photo.png"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={6}
                        gambar="/images/photo.png"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={7}
                        gambar="/images/6.png"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={8}
                        gambar="/images/photo.png"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={9}
                        gambar="/images/5.png"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={10}
                        gambar="/images/1.png"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={11}
                        gambar="/images/7.png"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={12}
                        gambar="/images/6.png"/>
                    <PegawaiCard
                        nama="Sigit Wibowo"
                        star={18}
                        nip="198702112010121004"
                        no={11}
                        gambar="/images/7.png"/>
                </div>
            </div>
        </div>
    )
}
