export default function BadgeVote1() {
    return (
        <div
            className="bg-lime-100 border-l-4  mb-4 rounded-lg border-lime-500 rounded-b text-lime-900 px-4 py-3 shadow-md"
            role="alert">
            <div className="flex">
                <div className="hidden py-1 sm:block">
                    <svg
                        className="fill-current h-6 w-6 text-lime-500 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"><path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                </div>
                <div>
                    <p className="font-bold">Perhatian</p>
                    <p className="text-sm">Saat Ini Voting Tingkat Unit Kerja Belum Dibuka!</p>
                    <p className="text-sm">Voting akan dibuka pada tanggal&nbsp;
                        <strong>17 Juli - 16 Agustus 2023</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}