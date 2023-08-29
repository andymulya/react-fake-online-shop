export default function ButtonCounter({ nameButton, handleOnclick }){
    return <div className="btn btn-xs btn-outline btn-circle text-cyan-500 pb-[2px] hover:bg-cyan-600 hover:border-cyan-50" onClick={ handleOnclick }>{ nameButton }</div>
}