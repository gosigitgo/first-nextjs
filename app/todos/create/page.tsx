"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        setIsLoading(true)

        await fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": " application/json"
            },
            body: JSON.stringify({
                desc, date, time
            })
        }).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })

        setIsLoading(false)
        router.refresh()
        router.push('/todos')
    }

    return (
        <form className='w-[500px] mx-auto pt-20 flex flex-col gap-2' onSubmit={handleSubmit}>
            <input type="text" placeholder='Masukkan Deskripsi' value={desc} onChange={(e) => setDesc(e.target.value)} className='w-full border p-2 rounded-md' />
            <input type="date" placeholder='Masukkan Tanggal' value={date} onChange={(e) => setDate(e.target.value)} className='w-full border p-2 rounded-md' />
            <input type="time" placeholder='Masukkan Waktu' value={time} onChange={(e) => setTime(e.target.value)} className='w-full border p-2 rounded-md' />
            <button disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</button>
        </form>
    )
}

export default Page