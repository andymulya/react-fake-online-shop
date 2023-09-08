

export default function InfoUserComponent({ label, value, isEdited }){
    return(
        <div className="table table-row space-y-3">
            <label className="font-semibold text-slate-600 table-cell pr-5">{ label }</label>
            {
                (isEdited) ? <input type="text" value={value} className="input input-bordered input-xs input-info w-full max-w-xs" /> : <p className="whitespace-nowrap">: { value }</p>
            }
        </div>
    )
}