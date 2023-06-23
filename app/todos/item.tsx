"use client"
import {Todo} from '@prisma/client'
import {useRouter} from 'next/navigation'
import React from 'react'

interface Props {
    todo : Todo
}

const Item = ({todo} : Props) => {
    const router = useRouter()

    const handleDelete = async(id : number) => {
        await fetch('/api/post?id=' + id, {method: "DELETE"})
        router.refresh()
    }
    return (
        <div className='flex-auto w-full'>
            <div className='border rounded-md p-4 flex-col'>
                <h2 className='text-sm'>ID: {todo.id}</h2>
                <h1>{todo.desc}</h1>
                <p>{todo.date}</p>
                <p>{todo.time}</p>
                <div className='inline-flex mt-4 gap-4 text-right content-end w-full'>
                    <button
                        className='text-xs hover:text-zinc-800 font-bold'
                        onClick={() => router.push(`/todos/update/${todo.id}`)}>Update</button>
                    <button
                        className='text-xs text-red-500 hover:text-red-400 font-bold'
                        onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Item