import { useMemo } from "react";
import { OrderTotalsPros } from "../Types";
import { formatoMoneda } from "../helpers";


const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsPros) => {

    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar:{''}
                    <span className="font-bold">{formatoMoneda(subTotalAmount)}</span>
                </p>
                <p>Propina:{''}
                    <span className="font-bold">{formatoMoneda(tipAmount)}</span>
                </p>
                <p>Total a Pagar:{''}
                    <span className="font-bold">{formatoMoneda(totalAmount)}</span>
                </p>
            </div>

            <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" disabled={totalAmount === 0} onClick={placeOrder}>Guardar Orden</button>
        </>
    );
};

export default OrderTotals;