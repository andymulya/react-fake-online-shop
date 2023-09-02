export default function Indicator({ value, children }){
    return (
        <div className="indicator">
            <span className="indicator-item indicator-end badge badge-secondary top-3 -right-24">{ value }</span> 
            { children }
        </div>
    )
}