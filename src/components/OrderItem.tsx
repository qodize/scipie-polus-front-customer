import React, {FC, useState} from 'react';
import {Order} from "../types/types";

interface OrderItemProps{
    order: Order;
}

const UserItem: FC<OrderItemProps> = ({order}) => {

    let statusStage = false
    if(order.status === 'assigned'){
        statusStage = true
    }

    const data_string = order.start +' '+ order.end
    console.log({order})
    return (
        <div className="font-bold w-[50vw] h-[100px] pt-3 pl-4  border-2 border-black border-opacity-40 rounded-2xl m-auto text-center flex flex-row">
            <div className="text-left my-2">
                <p>{order.transport_type}</p>
                <p>{data_string}</p>
            </div>
            {statusStage ? <div className="h-[30px] w-[100px] border-green-600 border-2 rounded-2xl ml-auto mr-20 mt-[23px] text-center bg-green-600">{order.status}</div> :
                <div className="h-[50px] w-[150px] border-red-500 border-2 rounded-3xl ml-auto mr-[55px] mt-[10px] pb-12 text-center bg-red-500">{order.status}</div>}
        </div>
    );
};

export default UserItem