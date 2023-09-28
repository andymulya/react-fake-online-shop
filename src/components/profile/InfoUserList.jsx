import InfoUserComponent from "./InfoUserComponent"

export default function InfoUserList({ data }){

    return (
        <div>
            <InfoUserComponent label={"Username"} value={ data.username }/>
            <InfoUserComponent label={"First Name"} value={ data.name.firstname }/>
            <InfoUserComponent label={"Last Name"} value={ data.name.lastname }/>
            <InfoUserComponent label={"Email"} value={ data.email }/>
            <InfoUserComponent label={"Phone"} value={ data.phone }/>
            <InfoUserComponent label={"City"} value={ data.address.city }/>
            <InfoUserComponent label={"Street"} value={ data.address.street }/>
            <InfoUserComponent label={"Zip Code"} value={ data.address.zipcode }/>
        </div>
    )
}