"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = ({
    params,
}: {
    params: { id: string };
}) => {
    const id = params.id

    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        await fetch("/api/post", {
            method: "PUT",
            headers: {
                "Content-Type": " application/json"
            },
            body: JSON.stringify({
                desc, date, time, id
            })
        }).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })

        router.push('/todos')
    }

    useEffect(() => {
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getData = async () => {
        const res = await fetch("/api/post/" + id)
        const json = await res.json()

        if(!json){
            router.push('/404')
            return;
        }

        setDesc(json.todo.desc)
        setDate(json.todo.date)
        setTime(json.todo.time)
    }

    return (
        <form className='w-[500px] mx-auto pt-20 flex flex-col gap-2' onSubmit={handleSubmit}>
            <input type="text" placeholder='Masukkan Deskripsi' value={desc} onChange={(e) => setDesc(e.target.value)} className='w-full border p-2 rounded-md' />
            <input type="date" placeholder='Masukkan Tanggal' value={date} onChange={(e) => setDate(e.target.value)} className='w-full border p-2 rounded-md' />
            <input type="time" placeholder='Masukkan Waktu' value={time} onChange={(e) => setTime(e.target.value)} className='w-full border p-2 rounded-md' />
            <button>Update</button>
        </form>
    )
}

export default Page