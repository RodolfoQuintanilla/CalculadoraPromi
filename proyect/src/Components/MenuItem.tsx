import type { MenuItem } from "../Types";

type menuItemProps = {
    item: MenuItem,
    addItem: () => void
}

const MenuItem = ({ item, addItem }: menuItemProps) => {
    return (
        <button
            onClick={addItem}
            className="border-2 border-teal-400  hover:bg-teal-200 w-full p-3 flex justify-between">
            <p>{item.name}</p>
        </button>
    );
};

export default MenuItem;