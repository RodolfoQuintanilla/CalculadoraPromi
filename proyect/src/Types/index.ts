export type MenuItem = {
    id: number,
    name: string,
    price: number,
}

export type OrderItem = MenuItem & {
    quantity: number
}

export type menuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export type OrderContenteProps = {
    order: OrderItem[],
    deletItem: (item: MenuItem['id']) => void
}