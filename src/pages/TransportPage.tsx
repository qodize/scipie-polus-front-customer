import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import Card, {CardVariant} from "../components/Card";
import UserList from "../components/UserList";
import {inspect} from "util";
import TransportSort from "../components/TransportSort";
import UserItem from "../components/UserItem";
import { YMaps, Map } from '@pbe/react-yandex-maps';
import OrderForm from "../components/orderForm";
import transportSort from "../components/TransportSort";


export function TransportPage() {
    const [users, setUsers] = useState<IUser[]>([])
    const [usersphone, setPhone] = useState('')

    var useUsers = users

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers(){
        try {
            const response = await axios.get<IUser[]>('https://scipie.ru/api/polus/transports/')
            setUsers(response.data)
            console.log(response.data)
        }catch (e){
            alert(e)
        }
    }

    const [selectedOption, setSelectedOption] = useState<String>();

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    if(selectedOption === "1"){
        let crans:IUser[] = []

        for(let i = 0;i<users.length;i++) {
            if(users[i].type.startsWith('Кран')){
                crans.push(users[i])
            }
        }
        useUsers = crans

    } else if(selectedOption === "3"){
        let loaders:IUser[] = []

        for(let i = 0;i<users.length;i++) {
            if(users[i].type.startsWith('Погрузчик')){
                loaders.push(users[i])
            }
        }
        useUsers = loaders
    } else if(selectedOption === "2"){
        let autoTowers:IUser[] = []

        for(let i = 0;i<users.length;i++) {
            if(users[i].type.startsWith('Автовышка')){
                autoTowers.push(users[i])
            }
        }
        useUsers = autoTowers
    }


    const [transporttype, setTransporttype] = useState<string>('');

    const useritemCallback = (transporttype: string) => {
        setTransporttype(transporttype);
        console.log(transporttype);
    };
    var useType = transporttype;


    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);

    return (
        <div>
            <div>
                <p className="font-bold text-4xl ml-[290px] mb-8 mt-8">Заказать технику</p>
                <TransportSort selectChange={selectChange}/>
            </div>
                <UserList users={useUsers} callback={useritemCallback}/>
            <div className="text-center">
                <p className="font-bold text-2xl mt-10">Укажите пункт назначения</p>
                <YMaps >
                    <div className="mx-72 my-10">
                        <Map width="945px" height="500px"  defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                             onClick={(event: any) => { // устанавливаем маркер и записываем координаты в стейт
                                 setLatitude(event.get('coords')[0])
                                 setLongitude(event.get('coords')[1])
                                 // console.log(event.get('coords'))
                        }}/>
                    </div>
                </YMaps>
            </div>
            <p className="font-bold text-2xl text-center mb-6">Детали вашего заказа</p>
            <div  className="text-left mx-[650px]">
                <div>
                    <label htmlFor="start">Начало бронирования: </label>
                    <input id="start" type="datetime-local" name="startdatetime" onChange={event => setStartDate(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="end">Конец бронирования: </label>
                    <input id="end" type="datetime-local" name="enddatetime" onChange={event => setEndDate(event.target.value)}/>
                </div>
            </div>
            <OrderForm transporttype={useType} startDate={startDate} endDate={endDate} latitude={latitude} longitude={longitude}/>
        </div>
    )
};


