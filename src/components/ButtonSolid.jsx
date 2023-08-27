export default function ButtonSolid({ nameButton, width }){
    return <button className={`btn bg-cyan-500 text-base-100 text-center ${width}`}>{ nameButton }</button>
}