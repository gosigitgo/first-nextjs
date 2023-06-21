import {CalendarIcon, Square3Stack3DIcon, SquaresPlusIcon, PlayCircleIcon, UsersIcon} from '@heroicons/react/20/solid'
import PegawaiCard from '../unit-kerja/pegawai_card'
import BadgeUker from './badge_pegawai'
import PegawaiVote from './pegawai_vote'

export const metadata = {
    title: '.: Vote Pegawai | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

export default function Page() {

    return (
        <div>
            <BadgeUker/>
            <div className="border-dotted rounded-lg">
                <div className="flex flex-col w-full items-center justify-center">
                    <div className='text-lg py-4 font-bold'>Cari Pegawai Paling BerAkhlak Pilihanmu!</div>
                    <div className='w-5/6'>
                        <form>
                            <label
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Cari</label>
                            <div className="relative">
                                <div
                                    className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="focus:outline-none block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-800 focus:border-cyan-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-800 dark:focus:border-cyan-800"
                                    placeholder="Cari berdasarkan Nama atau NIP"
                                    required/>
                                <button
                                    type="submit"
                                    className="text-white absolute right-2.5 bottom-2.5 bg-cyan-900 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Cari</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="grid grid-auto-fit-lg gap-4 py-5 -z-100 mt-4">
                    <PegawaiVote
                        nama="Sigit Wibowo"
                        uker="Biro Organisasi dan SDM"
                        nip="198702112010121004"
                        no={1}
                        gambar="/images/1.png"/>
                    <PegawaiVote
                        nama="Sigit Prabowo"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={2}
                        gambar="/images/5.png"/>
                    <PegawaiVote
                        nama="Sigit Subagjo"
                        uker="Biro Organisasi dan SDM"
                        nip="198702112010121004"
                        no={3}
                        gambar="/images/7.png"/>
                    <PegawaiVote
                        nama="Sigita Rius"
                        nip="198702112010121004"
                        uker="Biro Organisasi dan SDM"
                        no={4}
                        gambar="/images/6.png"/>
                </div>
            </div>
        </div>
    )
}