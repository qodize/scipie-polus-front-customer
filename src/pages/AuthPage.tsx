import React, {useState} from 'react';
import {IUser} from "../types/types";

interface AuthProps {
    setPhone: (phone: string) => void;
}

export function AuthPage({setPhone}: AuthProps) {
    const [tempPhone, setTempPhone] = useState('');

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Phone number</p>
                    <input type="text" onChange={event => setTempPhone(event.target.value)}/>
                </label>
                <div>
                    <button type="submit" onClick={event => setPhone(tempPhone)}>Submit</button>
                </div>
            </form>
        </div>
    )
}