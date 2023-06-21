'use client'

import {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {InformationCircleIcon} from '@heroicons/react/24/outline'

export default function ModalQuota() {
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
                className="inline-flex items-center align-middle rounded-full bg-cyan-100 ml-2 px-2 py-0 text-[10px] font-semibold text-cyan-900 shadow-xs ring-1 ring-inset ring-cyan-900 hover:bg-cyan-50">
                <InformationCircleIcon
                    className="text-cyan-900 -ml-0.5 mr-0.5 h-4 w-4"
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
                                                    Info Kuota Kandidat
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Jumlah kandidat pegawai dihitung berdasarkan jumlah pegawai dalam unit kerja
                                                        dengan ketentuan sebagai berikut:
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        <table className="table-auto border-collapse border border-grey-400">
                                                            <thead>
                                                                <tr>
                                                                    <th className="px-4 py-2">Jumlah Pegawai</th>
                                                                    <th className="px-4 py-2">Jumlah Quota Pegawai (Maksimal)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center">1 - 100</td>
                                                                    <td className="border px-4 py-2 text-center">3</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center">101 - 200</td>
                                                                    <td className="border px-4 py-2 text-center">4</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center">201 - 350</td>
                                                                    <td className="border px-4 py-2 text-center">5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center">351 - 500</td>
                                                                    <td className="border px-4 py-2 text-center">6</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center">501 - 650</td>
                                                                    <td className="border px-4 py-2 text-center">7</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center">651 - 800</td>
                                                                    <td className="border px-4 py-2 text-center">8</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center">801 - 1000</td>
                                                                    <td className="border px-4 py-2 text-center">9</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center">&gt; 1000</td>
                                                                    <td className="border px-4 py-2 text-center">10</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
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
