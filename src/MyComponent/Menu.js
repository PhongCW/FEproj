
import { Button, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../Menu.scss'

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
                    <NavLink><Button>オーダー管理</Button></NavLink>
                </div>
            </div>
            <footer className='MenuFooter'>クラフト情報システム株式会社</footer>
        </div>
    )
}
export default Menu;