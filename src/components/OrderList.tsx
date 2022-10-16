import React, {FC} from 'react';
import {Order} from "../types/types";
import OrderItem from "./OrderItem";

interface OrderListProps {
    orders: Order[];
}

const OrderList: FC<OrderListProps> = ({orders}) => {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4">
            {orders.map(order =>
            <OrderItem order={order}/>
            )}
        </div>
    );
}

export default OrderList;