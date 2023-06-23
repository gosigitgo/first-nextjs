import Link from 'next/link'
import { TodoList } from './todolist'

export const metadata = {
  title: '.: CRUD Sample | Penghargaan Bhakti Karya Husada :.',
  description: 'Aplikasi Penghargaan Bhakti Karya Husada',
  developer: 'sgt.wibowo@gmail.com',
  icons: '/images/favicon.png'
}

const getTodos = async() => {
    const res = await fetch(process.env.BASE_URL + '/api/post', {
        next: {
            revalidate: 0
        }
    });
    try {
        const json = await res.json()
        return json
    } catch (err) {
        console.log('error', err)
        return []
    }
}

const Page = async() => {
    
    const todos = await getTodos()

    return (
        <div className='mt-2 w-full'>
            <Link
                href={"/todos/create"}
                className='text-white right-2.5 bottom-2.5 bg-cyan-900 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>Tambah</Link>
            <div
                className='mt-4 w-full'>
                <TodoList todos={todos} />
            </div>
        </div>
    )
}

export default Page