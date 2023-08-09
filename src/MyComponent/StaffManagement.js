
import { useEffect, useState } from "react";
import { Table, Button, Tab } from "react-bootstrap";
import axios from "axios";
import Staff_List from "./Staff_List";
import "../StaffManagement.scss"

const StaffManagement = () => {
    const [staff, setStaff] = useState([{}])

    useEffect(() => {
        const set = async() => {
            try {
                const res = await axios.get("http://127.0.0.1:8000/ShowData");
                setStaff([...res['data']])
            }catch(err){
                console.log(err);
            }
        }
        set()
    }, []);

    return (
        <div>
            <Staff_List></Staff_List>
            <div className="StaffList">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>氏名</th>
                            <th>氏名（振り）</th>
                            <th>職制</th>
                        </tr>
                    </thead>
                </Table>
                {staff.map((item)=>{
                    return(
                        <Table striped bordered hover variant="light">
                            <tbody>
                                <tr>
                                    <td>{item['id']}</td>
                                    <td>{item['Family Name']}</td>
                                    <td>{item['Full Name']}</td>
                                    <td>{item['Office']}</td>
                                </tr>
                            </tbody>
                        </Table>
                    )
                })}
            </div>
        </div>
    )
}

export default StaffManagement;