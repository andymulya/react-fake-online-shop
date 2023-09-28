export default function TextInput({ refInput, typeInput, placeholder }){
    return(
        <label>
            <input type={typeInput} ref={ refInput } placeholder={placeholder} className="input input-bordered input-info w-full" />
        </label>
    )
}