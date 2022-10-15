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
        try {
            const response = await axios.post('https://scipie.ru/api/polus/orders/', {
                user_phone: getPhone(),
                transport_type: transporttype,
                start: startDate,
                end: endDate,
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
        <div>
            {/*<form>*/}
                <div> Тип транспорта: {transporttype} </div>
                <div> Начало бронирования: {startDate} </div>
                <div> Конец бронирования: {endDate} </div>
                <div> Широта: {latitude} </div>
                <div> Долгота {longitude} </div>
                <div><button onClick={event => confirm()}>Подтвердить</button></div>
            {/*</form>*/}
        </div>
    );
};

export default OrderForm;