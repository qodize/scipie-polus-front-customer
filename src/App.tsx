import {Route, Routes} from "react-router-dom";
import {TransportPage} from "./pages/TransportPage";
import {Orders} from "./pages/Orders";
import {AuthPage} from "./pages/AuthPage"
import {Navigation} from "./components/navigation";
import {useState} from "react";

function setPhone(phone: string){
    sessionStorage.setItem("phone", phone);
}

function getPhone() {
    return sessionStorage.getItem("phone");
}

function App() {
    const currentPhone = getPhone();
    if (!currentPhone) {
        return <AuthPage setPhone={setPhone}/>;
    }
    return(
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<TransportPage/>}/>
                <Route path="/orders" element={<Orders/>}/>
            </Routes>
        </>
    )
}

export default App;
