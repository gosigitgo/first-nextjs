"use client"

import {ChangeEventHandler, Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon, CheckCircleIcon} from '@heroicons/react/24/outline'
import Image from 'next/image'

function classNames(...classes : any[]) {
    return classes
        .filter(Boolean)
        .join(' ')
}

type Params = {
    label: string,
    index: number
}

export const Checkbox = (params : Params) => {
    return (
        <div
            className={`flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 my-1`}>

            <input
                type="checkbox"
                id={`checkbox-${params.index}`}
                name={`checkbox-${params.index}`} />
            <label
                className="w-full py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor={`checkbox-${params.index}`}>{params.label}</label>
        </div>
    )
}

export default function ModalPegawaiVote() {
    const checkList = [
        "Suka Menolong (helpful)",
        "Ceria (cheerfull)",
        "Datang kerja tepat waktu",
        "Tidak melakukan perbuatan tercela",
        "Mampu melaksanakan tugasnya dengan baik",
        "Suka berbagi pengetahuan (sharing knowledge)",
        "Tidak memberikan pengaruh buruk",
        "Tidak mengeluh terhadap pemberian tugas",
        "Mampu bekerja sama dalam tim"
    ]
    const [checked,
        setChecked] = useState([])
    const [open,
        setOpen] = useState(false)

    function handleClose() {
        setOpen(!open)
    }
    return (
        <div>
            <div className="px-3 pb-2 my-3 items-center">
                <button
                    type="button"
                    onClick={handleClose}
                    className="flex w-full justify-center text-cyan-900  rounded-md border border-solid border-cyan-900 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 hover:text-slate-100 hover:bg-cyan-700">
                    <CheckCircleIcon className="font-bold h-6 w-6 pr-1"/>
                    <span>Vote Pegawai</span>
                </button>
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                            className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
                                <Dialog.Panel
                                    className="flex w-full transform text-left text-base transition md:my-5 md:max-w-2xl md:px-2 lg:max-w-2xl">
                                    <div
                                        className="relative w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button
                                            type="button"
                                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                            onClick={() => setOpen(false)}>
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon
                                                className="h-6 w-6 border border-solid border-cyan-900 rounded-lg"
                                                aria-hidden="true"/>
                                        </button>
                                        <div className="flex w-full pb-2">
                                            <div className="absolute top-4 mt-0 sm:top-4 md:top-6 lg:top-6">
                                                <p className='text-red-900 text-lg'>
                                                    <strong>DETAIL PEGAWAI</strong>
                                                </p>
                                            </div>
                                            <div className="flex w-full sm:mt-7">
                                                <div className="mr-3">
                                                    <Image
                                                        src='/images/1.png'
                                                        width={160}
                                                        height={160}
                                                        alt="No Photo"
                                                        className="object-cover min-w-24 min-h-24 mt-1 border border-solid border-x-grey-400 rounded-2xl border-1 shadow-lg "/>
                                                </div>
                                                <div className='w-full mt-1'>
                                                    <div className="grid grid-cols-1 gap-y-0">
                                                        <p className="flex w-full text-sm font-bold text-gray-900">SIGIT WIBOWO</p>
                                                        <p className="flex w-full text-sm text-gray-900">198702112010121004</p>
                                                        <p className="flex w-full text-sm text-gray-900">Penata Tk.I - III/b</p>
                                                        <p className="flex w-full text-sm text-gray-900">Pranata Komputer Ahli Pertama</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-full border-t border-gray-200">
                                            <p className='font-bold my-1 text-cyan-900'>Penilaian Ber<strong>AKHLAK</strong>
                                            </p>
                                        </div>

                                        <div className="border-t border-gray-100">
                                            {checkList.map((item, index) => (<Checkbox key={index} label={item} index={index}/>))}
                                        </div>
                                        <div
                                            className="flex mt-8 cursor-pointer bg-indigo-600 text-white items-center py-2 rounded-lg justify-center border border-gray-900 border-solid hover:bg-indigo-700"
                                            onClick={() => setOpen(false)}>
                                            <CheckCircleIcon className='font-bold h-6 w-6 pr-1'/>
                                            <span className="">VOTE</span>
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