export default function ButtonOutline({ nameButton, handleClick }){
    return <button onClick={ handleClick } className="btn btn-outline text-cyan-600">{ nameButton }</button>
}