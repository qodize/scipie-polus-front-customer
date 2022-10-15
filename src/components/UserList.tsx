import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
    users: IUser[];
    callback: (transporttype: string) => void;
}

const UserList: FC<UserListProps> = ({users, callback}) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {users.map(user =>
                <UserItem user={user} callback={callback}/>
            )}
        </div>
    );
};

export default UserList;