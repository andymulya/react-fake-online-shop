export default function Indicator({ value, children }){
    return (
        <div className="indicator">
            <span className="indicator-item indicator-bottom indicator-start badge badge-secondary top-6 left-2">{ value }</span> 
            { children }
        </div>
    )
}