import React, {FC, useState} from 'react';
import {IUser} from "../types/types";

interface UserItemProps{
    user: IUser;
    callback: (transporttype: string) => void;
}

const UserItem: FC<UserItemProps> = ({user, callback}) => {


    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        callback(user.type);
    };

    return (
            <div className="bg-amber-500 w-[25vw] h-[25vw] hover:bg-amber-600 pt-4  border-2 rounded-2xl m-auto text-center pb-3">
                {user.type}
                <button onClick={buttonHandler} className="w-full h-full"></button>
            </div>
    );
};

export default UserItem