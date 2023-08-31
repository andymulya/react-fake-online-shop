export default function Search({ value, handleInputSearch }){
    return (
        <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full" value={ value } onChange={ handleInputSearch } />
        </div>
    )
}