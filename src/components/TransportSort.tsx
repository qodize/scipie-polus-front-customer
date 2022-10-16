import React, {useState} from 'react';

interface TransportSortProps {
    selectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const TransportSort = ({selectChange}: TransportSortProps) => {
    return (
        <div className="">
            <div className="container border-2 rounded-2xl bg-amber-400 my-4 text-center w-[945px] h-[100px] mx-72">
                <p className="text-2xl font-bold mt-2">Параметры техники</p>
                <select onChange={selectChange} className="select border-2 border-black rounded-md mt-4 text-center bg-amber-400">
                    <option selected disabled>Выберите технику</option>
                    <option value="1">Кран</option>
                    <option value="2">Автовышка</option>
                    <option value="3">Погрузчик</option>
                </select>
            </div>
        </div>
    );
};

export default TransportSort;