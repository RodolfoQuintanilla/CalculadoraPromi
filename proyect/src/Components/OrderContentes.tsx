import { formatoMoneda } from "../helpers";
import { OrderContenteProps } from "../Types";



const OrderContentes = ({ order, deletItem }: OrderContenteProps) => {

    return (
        <div>
            <h2 className='font-black text-4xl'>Consumo</h2>
            <div className="space-y-3 mt-10 ">
                {
                    order.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                            <p className="text-lg" >
                                {item.name} - {formatoMoneda(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatoMoneda(item.price * item.quantity)}
                            </p>
                            <button
                                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                onClick={() => deletItem(item.id)}
                            >X</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OrderContentes;