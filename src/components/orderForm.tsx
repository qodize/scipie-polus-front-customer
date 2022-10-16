import React, {FC, useState} from 'react';
import {IUser} from "../types/types";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {data} from "autoprefixer";

interface orderProps{
    transporttype: string,
    startDate: string,
    endDate: string,
    latitude: number,
    longitude: number
}

function getPhone() {
    return sessionStorage.getItem("phone");
}

const OrderForm:FC<orderProps> = ({transporttype, startDate, endDate, latitude, longitude}) => {
    let navigate = useNavigate();
    async function confirm() {
        var startDT = new Date(startDate);
        var endDT = new Date(endDate);

        try {
            const response = await axios.post('https://scipie.ru/api/polus/orders/', {
                user_phone: getPhone(),
                transport_type: transporttype,
                start: startDT.toISOString(),
                end: endDT.toISOString(),
                latitude: latitude,
                longitude: longitude
            });
            console.log(response)
        }catch (e){
            alert(e)
        }
        navigate('/orders')
    }

    return (
        <div className="text-left mx-[650px]">
            {/*<form>*/}
                <div> Тип транспорта: {transporttype} </div>
                {/*<div> Начало бронирования: {startDate} </div>*/}
                {/*<div> Конец бронирования: {endDate} </div>*/}
                <div> Широта: {latitude} </div>
                <div> Долгота {longitude} </div>
                <div className="text-center"><button className="border-2 bg-amber-400 py-1 px-14 font-bold text-2xl mt-2 mb-10 rounded-2xl hover:text-amber-400 hover:bg-black" onClick={event => confirm()}>Заказать</button></div>
            {/*</form>*/}
        </div>
    );
};

export default OrderForm;