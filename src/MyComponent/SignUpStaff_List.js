
import { Button, Form } from "react-bootstrap";
import '../SignUp.scss'
import { useState } from "react";
import axios from "axios";

const SignUpStaff_List = () => {

    const [staff, setStaff] = useState({
        "FamilyName":"",
        "FullName":"",
        "Office":"",
    })

    const create = async(event) => {
        event.preventDefault();
        await axios.post('http://127.0.0.1:8000/SignUp',  {...staff})
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const ChangeFamilyName = (event) => {
        setStaff({...staff, "FamilyName":event.target.value})
    }

    const ChangeFullName = (event) => {
        setStaff({...staff, "FullName":event.target.value})
    }

    const ChangeOffice = (event) => {
        setStaff({...staff, "Office":event.target.value})
    }
    return (
        <div>
            <Form className="FormSignUp">
                <Form.Group className="col-md-5 mx-auto">
                    <Form.Label className="famillyName">氏名</Form.Label>
                    <Form.Control onChange={(event) => ChangeFamilyName(event)} type="text" placeholder="Enter your Family Name"></Form.Control>
                    <Form.Label className="fullname">氏名（振り）</Form.Label>
                    <Form.Control onChange={(event) => ChangeFullName(event)} type="text" placeholder="Enter your Full Name"></Form.Control>
                    <Form.Label className="office">職制</Form.Label>
                    <Form.Control onChange={(event) => ChangeOffice(event)} type="text" placeholder="Enter your office"></Form.Control>
                </Form.Group>
                <div className="CreateNewUser">
                    <Button size="lg" onClick={(event)=>create(event)}>Create</Button>
                </div>
            </Form>
        </div>
    )
}
export default SignUpStaff_List;