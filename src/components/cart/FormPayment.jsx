import TextInput from '../TextInput'
import ButtonSolid from '../ButtonSolid'


export default function FormPayment(){
    return (
        <form onSubmit={(e) => {e.preventDefault()}} className="flex flex-col gap-5 text-white" >
            <div className="flex flex-col">
                <label>Name On Card:</label>
                <TextInput typeInput={"text"} placeholder={"Name On Card"} />
            </div>

            <div className="flex flex-col">
                <label>Card Number:</label>
                <TextInput typeInput={"text"} placeholder={"Card Number"}/>
            </div>
            
            <div className="flex flex-col gap-5 sm:flex-row">
                <div className="flex flex-col">
                    <label>Expiration Date:</label>
                    <div className="flex flex-row max-w-xs">
                        <TextInput typeInput={"number"} placeholder={"MM"} />
                        <TextInput typeInput={"number"} placeholder={"YYYY"} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label>CVV:</label>
                    <TextInput typeInput={"text"} placeholder={"XXX"} />
                </div>
            </div>

            <ButtonSolid style={"bg-green-500 hover:bg-green-700 text-white"}>CheckOut</ButtonSolid>
        </form>
    )
}