export default function ButtonGhost({ children, handleClick }){
    return(
        <button onClick={handleClick} className='btn btn-ghost btn-circle'>
           {children}
        </button>
    )
}