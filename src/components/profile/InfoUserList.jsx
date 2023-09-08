import InfoUserComponent from "./InfoUserComponent"

export default function InfoUserList({ data, isEdited }){
    return (
        <div>
            <InfoUserComponent label={"Username"} value={ data.username } isEdited={isEdited}/>
            <InfoUserComponent label={"First Name"} value={ data.name.firstname } isEdited={isEdited}/>
            <InfoUserComponent label={"Last Name"} value={ data.name.lastname } isEdited={isEdited}/>
            <InfoUserComponent label={"Email"} value={ data.email } isEdited={isEdited}/>
            <InfoUserComponent label={"Phone"} value={ data.phone } isEdited={isEdited}/>
            <InfoUserComponent label={"City"} value={ data.address.city } isEdited={isEdited}/>
            <InfoUserComponent label={"Street"} value={ data.address.street } isEdited={isEdited}/>
            <InfoUserComponent label={"Zip Code"} value={ data.address.zipcode } isEdited={isEdited}/>
        </div>
    )
}