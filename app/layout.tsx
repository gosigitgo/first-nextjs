'use client'

import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import {Roboto} from 'next/font/google'
import Header from './components/header'
import {useSelectedLayoutSegment} from 'next/navigation'
import Footer from './components/footer'

const titles = [
    {
        key: 1,
        name: 'Pemilihan di Tingkat Unit Kerja',
        targetSegment: 'unit-kerja'
    }, {
        key: 2,
        name: 'Voting Tingkat Unit Kerja',
        targetSegment: 'vote-unit-kerja'
    }, {
        key: 3,
        name: 'Voting Tingkat Kementerian',
        targetSegment: 'vote-pusat'
    }, {
        key: 4,
        name: 'Penilaian Tingkat Akhir',
        targetSegment: 'pleno'
    }, {
        key: 5,
        name: 'Hero of The Month',
        targetSegment: 'vote-pegawai'
    }
]

export const metadata = {
    title: '.: Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

const roboto = Roboto({weight: '400', subsets: ['latin'], display: 'swap'})

export default function RootLayout({children} : {
    children: React.ReactNode;
}) {
    const activeSegment = useSelectedLayoutSegment()
    console.log(activeSegment)
    const selTitle = titles.filter(title => title.targetSegment === activeSegment)
    const pageTitle = (selTitle?.length > 0)?selTitle[0].name:'Penghargaan Bhakti Karya Husada'
    return (
        <html
            className="h-96 scrollbar scrollbar-w-1 scrollbar-thumb-teal-500 scrollbar-track-lime-100 scrollbar-corner-lime-400"
            lang="id">
            <body className={roboto.className}>
                <NextTopLoader color="#CCE70B"/>
                <Header/>
                <header className="bg-slate-100 shadow">
                    <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
                        <h1 className="text-2xl font-bold tracking-tight text-teal-800">{pageTitle}</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto pb-10 max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
                <Footer />

            </body>
        </html>
    )
}
