'use client'

import {Fragment, useState} from 'react'
import {Dialog, RadioGroup, Transition} from '@headlessui/react'
import {XMarkIcon, SquaresPlusIcon, MagnifyingGlassCircleIcon} from '@heroicons/react/24/outline'
import PegawaiSearch from './pegawai_search'

export default function ModalPilihPegawai() {
    const [open,
        setOpen] = useState(false)

    function handleClose() {
        setOpen(!open)
    }

    return (
        <div>
            <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <SquaresPlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true"/>
                Pilih Pegawai
            </button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="mx-auto max-w-full rounded bg-white z-10"
                    onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div
                            className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full justify-center text-center md:items-center md:px-2 lg:px-4 start-top">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
                                <Dialog.Panel
                                    className="flex w-full transform text-left text-base transition md:my-5 md:max-w-2xl md:px-2 lg:max-w-2xl sm:min-w-full">
                                    <div
                                        className="relative w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button
                                            type="button"
                                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-4 md:right-6 md:top-4 lg:right-8 lg:top-6"
                                            onClick={handleClose}>
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon
                                                className="h-6 w-6 border border-solid border-cyan-900 rounded-lg"
                                                aria-hidden="true"/>
                                        </button>
                                        <div className='grid grid-cols-1 w-full'>
                                            <div
                                                className="absolute top-4 mt-0 sm:top-4 md:top-4 lg:top-6">
                                                <p className='text-red-900 text-lg'>
                                                    <strong>PENCARIAN PEGAWAI</strong>
                                                </p>
                                            </div>
                                            <div
                                                className="flex top-0 sm:mt-5 justify-center items-center w-full py-1 mb-0">
                                                <div
                                                    className="flex grid-cols-12 w-full rounded-lg border border-solid border-cyan-800 py-1 px-2">
                                                    <input autoFocus 
                                                        className='col-span-10 text-cyan-800 text-sm py-1 px-2 focus:outline-none'
                                                        placeholder='Cari Pegawai...'/>
                                                    <button type="submit" className='flex col-span-2 w-full py-1 justify-end'>
                                                        <span className="sr-only">Cari</span><MagnifyingGlassCircleIcon className='text-cyan-900 w-6 h-6'/></button>
                                                </div>
                                            </div>
                                            <p className='flex w-full text-xs mt-0 text-orange-800 italic'>Catatan: Pencarian Berdasarkan&nbsp;<strong>Nama</strong>&nbsp;atau&nbsp;<strong>NIP</strong>
                                            </p>
                                            <p className='flex w-full text-md mt-2 font-bold text-cyan-800 italic'>Hasil Pencarian:
                                            </p>
                                            <div className="flex w-full grid-auto-fit-lg gap-2 py-2">
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={2}
                                                    gambar="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4f833245971cb326/63a46e8e1aef5b627a47ae3c/ronaldoalnassrmarca.jpg?auto=webp&format=pjpg&width=1200&quality=60"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={3}
                                                    gambar="/images/photo.png"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={4}
                                                    gambar="/images/photo.png"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={5}
                                                    gambar="/images/photo.png"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={6}
                                                    gambar="/images/photo.png"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={7}
                                                    gambar="/images/6.png"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={8}
                                                    gambar="/images/photo.png"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={9}
                                                    gambar="/images/5.png"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={10}
                                                    gambar="/images/1.png"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={11}
                                                    gambar="/images/7.png"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={12}
                                                    gambar="/images/6.png"/>
                                                <PegawaiSearch
                                                    nama="Sigit Wibowo"
                                                    nip="198702112010121004"
                                                    no={11}
                                                    gambar="/images/7.png"/>
                                            </div>
                                        </div>
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