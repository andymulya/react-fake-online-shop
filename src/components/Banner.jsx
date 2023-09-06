export default function Banner(){

    return(
        <div className="flex gap-3 bg-navy h-60 text-base-100 py-6 px-7">
            <div className="flex flex-col justify-center gap-5 w-2/4 h-full">
                <h1 className="text-2xl font-semibold md:text-4xl">Level up your style with our collections</h1>
                <a href="#products" className="bg-[#F6F1F1] btn btn-sm w-40 sm:w-44 text-slate-600 rounded-full text-center">Shop Now &gt;</a>
            </div>
            <div className="bg-base-100 w-2/3 h-full rounded-full" />
        </div>
    )
}