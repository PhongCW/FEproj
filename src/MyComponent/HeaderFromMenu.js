import "../Menu.scss"
import { Button } from "react-bootstrap";
import { CgLogOut } from "react-icons/cg";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import axios from "axios";


const HeaderFromMenu = () => {

    const [Condition, SetCondition] = useState(false)
    const Negative = useNavigate()

    const Logout = async(event) => {
        event.preventDefault();
        SetCondition(true)
        await axios.post('http://127.0.0.1:8000/Logout', {Condition})
        .then((response) => {
            if(response['Condition']=1){
                Negative('/')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <div className="MenuAndLogout">
                <div className="MenuHeader">
                オーダー受注支払合算システム
                </div>
                <div className="Logout-Menu"><Button variant="outline-secondary" onClick={(event)=>Logout(event)}><CgLogOut className="icon-logout"></CgLogOut></Button>ログアウト</div>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
export default HeaderFromMenu;