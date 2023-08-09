
import { Button, Form, Table } from "react-bootstrap";
import '../Staff_List.scss'
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Staff_List = (props) => {

    const Navigate =useNavigate()

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
        </div>
    )
}
export default Staff_List;
