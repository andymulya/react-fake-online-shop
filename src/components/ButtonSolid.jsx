export default function ButtonSolid({ children, style, handleOnClick }){
    return <button className={`btn text-center ${style}`} onClick={handleOnClick}>{ children }</button>
}