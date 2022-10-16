import React, {useState} from 'react';

interface AuthProps {
    setPhone: (phone: string) => void;
}

export function AuthPage({setPhone}: AuthProps) {
    const [tempPhone, setTempPhone] = useState('');

    return(
        <div className="border-4 border-black border-opacity-70 text-center my-72 w-[400px] h-[200px] border-2xl rounded-2xl m-auto" >
            <div className="content-center">
                <img className=" w-[100px] h-[50px] mt-4 mx-36" src="https://media.discordapp.net/attachments/968081638963699752/1030916893399322725/login.png"/>
            </div>
            <label>
                <input className="border-2 rounded-2xl text-center mt-4 w-[300px] h-[40px]" placeholder="Phone number" type="text" onChange={event => setTempPhone(event.target.value)}/>
            </label>
            <form>
                <button type="submit" className="mx-4 my-4 px-4 bg-yellow-500 border-2 rounded-2xl text-center" onClick={event => setPhone(tempPhone)}>Log in</button>
            </form>
        </div>
    )
}