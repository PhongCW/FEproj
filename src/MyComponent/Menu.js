
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../Menu.scss'
import OrderManagement from "./StaffManagement";

const Menu = () => {
    return (
        <div>
            <div className="allMenu">
                <div className="MenuTitle">
                メニュー画面
                </div>
                <div className="MenuButton1">
                    <NavLink to="/HeaderFromMenu/stafflist"><Button>スタッフ管理</Button></NavLink>
                </div>
                <div className="MenuButton2">
                    <NavLink to="/HeaderFromMenu/StaffManagement"><Button>オーダー管理</Button></NavLink>
                </div>
            </div>
            <footer className='MenuFooter'>クラフト情報システム株式会社</footer>
        </div>
    )
}
export default Menu;