export default function ButtonOutline({ children, handleClick }){
    return <button onClick={ handleClick } className="btn btn-outline flex flex-col justify-center text-cyan-600">{ children }</button>
}