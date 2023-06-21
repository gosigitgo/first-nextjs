'use client'

import {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {InformationCircleIcon} from '@heroicons/react/24/outline'
import { Interweave } from 'interweave';


const bodys = [
    {
        key: 1,
        title: 'Berorientasi Pelayanans',
        desc: <Interweave content="<b>Memenuhi Unsur:</b><ul class='pl-3 list-outside list-decimal'><li>Memahami dan memenuhi kebutuhan masyarakat</li><li>Ramah, cekatan, solutif, dan dapat diandalkan</li><li>Melakukan perbaikan tiada henti</li></ul>" />,
    },
    {
        key: 2,
        title: 'Akuntabel',
        desc: <Interweave content="<b>Memenuhi Unsur:</b><ul class='pl-3 list-outside list-decimal'><li>Melaksanakan tugas dengan jujur, bertanggung jawab, cermat, disiplin, dan berintegritas tinggi</li><li>Menggunakan kekayaan dan barang milik negara secara bertanggung jawab, efektif, dan efisien</li><li>Tidak menyalahgunakan kewenangan jabatan</li></ul>" />,
    },
    {
        key: 3,
        title: 'Kompeten',
        desc: <Interweave content="<b>Memenuhi Unsur:</b><ul class='pl-3 list-outside list-decimal'><li>Meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah</li><li>Membantu orang lain belajar</li><li>Melaksanakan tugas dengan kualitas terbaik</li></ul>" />,
    },
    {
        key: 4,
        title: 'Harmonis',
        desc: <Interweave content="<b>Memenuhi Unsur:</b><ul class='pl-3 list-outside list-decimal'><li>Menghargai setiap orang apapun latar belakangnya</li><li>Suka menolong orang lain</li><li>Membangun lingkungan kerja yang kondusif</li></ul>" />,
    },
    {
        key: 5,
        title: 'Loyal',
        desc: <Interweave content="<b>Memenuhi Unsur:</b><ul class='pl-3 list-outside list-decimal'><li>Memegang teguh ideologi Pancasila, Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, setia pada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah</li><li>Menjaga nama baik sesama ASN, Pimpinan, Instansi, dan Negara</li><li>Menjaga rahasia jabatan dan negara</li></ul>" />,
    },
    {
        key: 6,
        title: 'Adaptif',
        desc: <Interweave content="<b>Memenuhi Unsur:</b><ul class='pl-3 list-outside list-decimal'><li>Cepat menyesuaikan diri menghadapi perubahan</li><li>Terus berinovasi dan mengembangkan kreativitas</li><li>Bertindak proaktif</li></ul>" />
    },
    {
        key: 7,
        title: 'Kolaboratif',
        desc: <Interweave content="<b>Memenuhi Unsur:</b><ul class='pl-3 list-outside list-decimal'><li>Memberi kesempatan kepada berbagai pihak untuk berkontribusi</li><li>Terbuka dalam bekerja sama untuk menghasilkan nilai tambah</li><li>Menggerakkan pemanfaatan berbagai sumberdaya untuk tujuan bersama</li></ul>" />
    }
]

export default function Tooltips(params : {id: number}) {
    const [open,
        setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    function handleClose() {
        setOpen(!open)
    }

    return (
        <div>
            <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center align-middle rounded-full bg-rose-100 ml-2 px-2 py-0 text-[10px] font-semibold text-rose-900 shadow-xs ring-1 ring-inset ring-rose-900 hover:bg-rose-50">
                <InformationCircleIcon
                    className="text-rose-900 -ml-0.5 mr-0.5 h-4 w-4"
                    aria-hidden="true"/>
                Info
            </button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={handleClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <Dialog.Panel
                                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div
                                                className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <InformationCircleIcon className="h-6 w-6 text-cyan-600" aria-hidden="true"/>
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-base font-semibold leading-6 text-gray-900">
                                                    { bodys.filter((body) => body.key == params.id).map((item) => (item.title)) }
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-left text-gray-500">
                                                    { bodys.filter((body) => body.key == params.id).map((item) => (item.desc)) }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="submit"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}>
                                            Tutup
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}
