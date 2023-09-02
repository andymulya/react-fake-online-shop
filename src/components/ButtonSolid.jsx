export default function ButtonSolid({ children, style, handleOnClick }){
    return <button className={`btn text-base-100 text-center ${style}`} onClick={handleOnClick}>{ children }</button>
}