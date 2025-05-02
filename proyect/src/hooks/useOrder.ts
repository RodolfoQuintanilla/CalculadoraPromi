import { useState } from 'react';
import { OrderItem, MenuItem } from '../Types/index';


export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {
        const itemExiste = order.find(ordenarItem => ordenarItem.id === item.id)

        if (itemExiste) {
            const actualizarProducto = order.map(orderItem => orderItem.id === item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 }
                : orderItem
            )
            setOrder(actualizarProducto)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const deletItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }


    return {
        order,
        tip,
        setTip,
        addItem,
        deletItem,
        placeOrder,
        

    }
};

