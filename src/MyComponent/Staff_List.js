
import { Button, Form, Nav, NavItem, Tab, Table } from "react-bootstrap";
import '../Staff_List.scss'
import { useState } from "react";
import { useNavigate } from "react-router";

const Staff_List = () => {

    const Navigate =useNavigate()
    const [staff, setStaff] = useState({
        data: [{
            'FamillyName':"Yukata",
            'Office':"Kyoto",
        }]
    })

    const Search = (event) => {
        event.preventDefault();
    }

    const SignUp = (event) => {
        event.preventDefault();
        Navigate('/HeaderFromMenu/SignUp')

    }
    return (
        <div>
            <div className="TitleAndForm">
            <Form className="FormSearching">
                <Form.Group className='col-md-5 mx-auto'>
                    <Form.Label className="LabelFamilyName">氏名</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"></Form.Control>
                    <Form.Label className="LabelOffice">職制</Form.Label>
                    <Form.Control type="text" placeholder="Enter Office"></Form.Control>
                </Form.Group>
            </Form>
            </div>
            <div className="create">
                <Button className="col-md-2 mx-auto" onClick={(event) => Search(event)}>検索</Button>
                <Button className="col-md-2 mx-auto" onClick={(event) => SignUp(event)}>新規登録</Button>
            </div>
            {staff['data'].map((item)=>{
                return (
                    <Table key={item['FamillyName']} className="tableStaff" striped bordered hover size="sm" variant="dark">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>氏名</th>
                                <th>氏名（振り）</th>
                                <th>職制</th>
                            </tr>
                            <tr>
                                <th>#</th>
                                <th>#</th>
                                <th>#</th>
                                <th><Button variant="secondary">Detail</Button><Button variant="danger">Delete</Button></th>
                            </tr>
                        </thead>
                    </Table>
                )
            })}
        </div>
    )
}
export default Staff_List;
