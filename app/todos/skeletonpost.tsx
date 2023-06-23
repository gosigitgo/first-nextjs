export const SkeletonPost = () => {
    return (
        <div className='flex-auto'>
            <div
                className="flex-col animate-pulse items-center justify-center space-x-1 rounded-md border p-4">
                <div className="flex-col space-y-2">
                    <div className="h-5 w-4/12 rounded-md bg-gray-300 "></div>
                    <div className="h-5 w-10/12 rounded-md bg-gray-300 "></div>
                    <div className="h-5 w-9/12 rounded-md bg-gray-300 "></div>
                    <div className="h-5 w-9/12 rounded-md bg-gray-400 "></div>
                </div>
            </div>
        </div>
    );
};
