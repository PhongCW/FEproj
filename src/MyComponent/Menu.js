
import { Button } from "react-bootstrap";
import '../Menu.scss'
import {CgLogOut} from 'react-icons/cg'
import { useNavigate } from "react-router";
import  axios  from "axios";
import { useState } from "react";

const Menu = () => {

    const [Condition, SetCondition] = useState(false)
    const Negative = useNavigate()

    const Logout = async(event) => {
        event.preventDefault();
        SetCondition(true)
        await axios.post('http://127.0.0.1:8000/Logout', {Condition})
        .then((response) => {
            console.log(response)
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
            <div className="allMenu">
                <div className="MenuTitle">
                メニュー画面
                </div>
                <div className="MenuButton1"><Button>スタッフ管理</Button></div>
                <div className="MenuButton2"><Button>オーダー管理</Button></div>
            </div>
            <footer className='MenuFooter'>クラフト情報システム株式会社</footer>
        </div>
    )
}
export default Menu;