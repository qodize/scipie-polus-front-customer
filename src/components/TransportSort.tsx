import React, {useState} from 'react';

interface TransportSortProps {
    selectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const TransportSort = ({selectChange}: TransportSortProps) => {
    return (
        <div>
            <div className="container">
                <select onChange={selectChange} className="select">
                    <option selected disabled>Выберите технику</option>
                    <option value="1">Кран</option>
                    <option value="2">Автовышка</option>
                    <option value="3">Погрузчик</option>
                </select>
                {/*{selectedOption && <h2 className="result">{selectedOption}</h2>}*/}
            </div>
        </div>
    );
};

export default TransportSort;