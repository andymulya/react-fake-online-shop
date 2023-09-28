import iconCreditCard from '../../assets/img/credit_card.png'
import FormPayment from './FormPayment'

export default function PaymentMethod(){
    return (
        <div className="flex flex-col gap-10 bg-gradient-to-tr from-cyan-600 to-cyan-400 border-2 rounded-lg mt-5 mb-10 p-5">
                            
            <div className="flex flex-col items-center gap-5">
                <label className="text-base-100 text-sm font-bold">Payment Method</label>
                <div className="flex flex-row items-center border-2 border-base-100 rounded-full object-cover w-[145px] text-center p-2 cursor-pointer font-semibold text-base-100">
                    <img src={iconCreditCard} className="w-[30px] h-[30px]" />
                    <span className="text-sm uppercase whitespace-nowrap">Credit Card</span>
                </div>
            </div>

            <div className="flex justify-center">
                <FormPayment />
            </div>

        </div>
    )
}