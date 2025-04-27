import { useState } from 'react';
import { OrderItem } from '../Types/index';

export default function useOrder() {
    // const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = () => {
        console.log("Agregando...........");

    }

    return {
        addItem
    }
};

