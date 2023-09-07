import photoBackgroundBanner from '../../assets/img/potoBackgroundBanner.png'

export default function Banner(){

    return(
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-[#19A7CE] text-base-100 pt-10 pl-7">
            <div className="flex flex-col gap-5 xs:w-60 md:w-2/4">
                <h1 className="font-bold text-4xl drop-shadow-md">Level up your style with our collections</h1>
                <a href="#products" className="bg-navy hover:bg-cyan-800 btn btn-sm w-40 sm:w-44 text-base-100 rounded-full text-center">Shop Now &gt;</a>
            </div>
            <div className="bg-[#AFD3E2] rounded-full">
                <img src={photoBackgroundBanner} className="w-full relative z-10 drop-shadow-[-5px_-5px_3px_rgba(0,0,0,0.6)]" />
            </div>
        </div>
    )
}