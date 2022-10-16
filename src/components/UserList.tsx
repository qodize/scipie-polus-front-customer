import React, {FC, useState} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
    users: IUser[];
    callback: (transporttype: string) => void;
}

const UserList: FC<UserListProps> = ({users, callback}) => {
    const [chosenType, setChosenType] = useState("")



    return (
        <div className="mx-72">
            <div className="grid grid-cols-3 gap-4 place-content-center">
                {users.map(user =>
                    <UserItem user={user} callback={callback} chosenType={chosenType} choseTypeCallback={setChosenType}/>
                )}
            </div>
        </div>
    );
};

export default UserList;