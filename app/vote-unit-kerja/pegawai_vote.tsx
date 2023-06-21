'use client'

import Image from "next/image";
import {StarIcon, TrophyIcon } from "@heroicons/react/24/solid";
import ModalPegawaiVote from "./modal_pegawai_vote";

type Params = {
    nama: string,
    no: number,
    nip: string,
    uker: string,
    gambar: string
}
export default function PegawaiVote(params : Params) {
    return (
        <div
            className="flex flex-col shadow-lg rounded-xl border border-dotted border-cyan-900 border-1">
            <div
                className="w-24 px-2 text-[12px] py-1 rounded-br-md rounded-tl-md bg-cyan-700 text-white font-bold">Kandidat {params.no}</div>
            <div className="flex w-full items-center justify-center mb-2">
                <div
                    className="-z-10 relative mt-3 w-32 h-32 border border-solid border-x-grey-400 rounded-2xl border-1 shadow">
                    <Image
                        src={params.gambar}
                        width={170}
                        height={170}
                        alt="No Photo"
                        className="object-cover w-32 h-32 rounded-2xl"/>
                </div>
            </div>
            <div className="font-bold text-center text-sm xs:text-xs">{params.nama}</div>
            <div className="text-center text-xs xs:text-xs">{params.nip}</div>
            <div className="text-center text-xs truncate xs:text-sm h-4 px-2">{params.uker}</div>
            <hr
                className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
            <div className="flex w-full items-center justify-center">
                <span
                    className="inline-flex items-center mt-2 mr-2 mb-4 px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-semibold text-green-600">
                    <StarIcon className="text-green h-4 w-4"/>
                    <span className="ml-0 text-green text-xs">
                        17
                    </span>
                </span>
                <span
                    className="inline-flex items-center mt-2 mb-4 px-2 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-xs font-semibold text-blue-600">
                    <TrophyIcon className="text-blue h-4 w-4"/>
                    <span className="ml-1 text-blue text-xs">
                        1
                    </span>
                </span>
            </div>
            <ModalPegawaiVote />
        </div>
    );
}