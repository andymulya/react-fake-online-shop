export default function CategoryComponent({ titleCategory, image }){

    return(
        <div className="flex flex-col items-center rounded-lg w-24 h-28 p-5 shadow-lg group hover:scale-90 transition-all">
            <div className="bg-gradient-to-t from-cyan-500 to-cyan-100 rounded-full shadow-md w-16 h-16 absolute z-0" />
            <div className="flex flex-col items-center z-20">
                <img src={ image } alt="category" className="w-12 group-hover:scale-125 transition-all" />
                <label className="uppercase font-semibold text-xs">{ titleCategory }</label>
            </div>
        </div>
    )
}