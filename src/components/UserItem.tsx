import React, {FC, useState} from 'react';
import {IUser} from "../types/types";

interface UserItemProps{
    user: IUser;
    callback: (transporttype: string) => void;
    chosenType: string
    choseTypeCallback: (type: string) => void;
}

const UserItem: FC<UserItemProps> = ({user, callback, chosenType, choseTypeCallback}) => {

    var details = chosenType === user.type;
    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        choseTypeCallback(user.type)
        callback(user.type);
    };

    return (
        <div>
            {details ?
                <div className=" font-bold bg-amber-300 w-[20vw] h-[10vw] border-black border-opacity-80 border-4 rounded-2xl text-center">
                    <button onClick={buttonHandler} className=" w-[20vw] h-[10vw]">{user.type}</button>
                </div> :
                <div className=" font-bold w-[20vw] h-[10vw] hover:border-amber-300 border-4 border-2 rounded-2xl text-center">
                    <button onClick={buttonHandler} className=" w-[20vw] h-[10vw]">{user.type}</button>
                </div>}
        </div>
    );
};

export default UserItem