export default function ButtonOutline({ children, handleClick }){
    return <button onClick={ handleClick } className={`btn btn-outline flex flex-col justify-center text-cyan-600 hover:text-cyan-50 hover:border-cyan-700 hover:bg-cyan-500`}>{ children }</button>
}