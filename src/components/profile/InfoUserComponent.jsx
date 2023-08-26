export default function InfoUserComponent({ label, value }){
    return(
        <div className="table table-row space-y-3">
            <label className="font-semibold text-slate-600 table-cell pr-5">{ label }</label>
            <p className="w whitespace-nowrap">: { value }</p>
        </div>
    )
}