export default function CategoryComponent({ titleCategory, image, handleOnClick }){

    return(
        <div className="flex flex-col items-center card rounded-lg w-24 h-28 p-5 group hover:scale-90 transition-all" onClick={handleOnClick}>
            <div className="bg-gradient-to-t from-navy to-cyan-100 rounded-full shadow-md w-16 h-16 absolute z-0" />
            <div className="flex flex-col items-center z-20">
                <img src={ image } alt="category" className="w-12 group-hover:scale-125 transition-all" />
                <label className="uppercase font-bold text-xs group-hover:scale-125 transition-all">{ titleCategory }</label>
            </div>
        </div>
    )
}