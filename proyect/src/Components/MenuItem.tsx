import { formatoMoneda } from "../helpers";
import type { MenuItem, menuItemProps } from "../Types";

const MenuItem = ({ item, addItem }: menuItemProps) => {


    return (
        <button
            onClick={() => addItem(item)}
            className="border-2 border-teal-400  hover:bg-teal-200 w-full p-3 flex justify-between">
            <p>{item.name}</p>
            <p className="font-black">{formatoMoneda(item.price)}</p>
        </button>
    );
};

export default MenuItem;