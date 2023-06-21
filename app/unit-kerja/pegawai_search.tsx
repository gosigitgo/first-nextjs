'use client'

import Image from "next/image";
import {StarIcon, TrophyIcon } from "@heroicons/react/24/solid";
import ModalInputPilihPegawai from "./modal_input_pilih_pegawai";

type Params = {
    nama: string,
    no: number,
    nip: string,
    gambar: string
}
export default function PegawaiSearch(params : Params) {
    return (
        <div
            className="flex flex-col shadow-lg rounded-xl border border-dotted border-cyan-900 border-1">
            <div className="flex w-full items-center justify-center mb-2">
                <div
                    className="relative mt-3 w-32 h-32 border border-solid border-x-grey-400 rounded-2xl border-1 shadow">
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
            <div className="text-center text-xs xs:text-xs pb-2">Pranata Komputer Ahli Pertama</div>
            <ModalInputPilihPegawai />
        </div>
    );
}