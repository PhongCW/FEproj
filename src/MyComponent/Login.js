
import '../Header.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Nav} from 'react-bootstrap'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Menu from './Menu'

const Login = () => {

    const Nevigate = useNavigate();
    // const click = async(event) => {
    //     event.preventDefault();
    //     const res = await axios.get('http://127.0.0.1:8000/showData');
    //     console.log(res.data)
    // }
    const [admin, setAdmin] = useState({
        'admin':'',
        'password':''
    })
    const changeAdmin = (event) => {
        setAdmin({...admin, 'admin':event.target.value})
    }
    const changePassword = (event) => {
        setAdmin({...admin, 'password':event.target.value})
    }
    
    const ClickToGet = async(event) => {
        event.preventDefault();
        await axios.post('')
    }

    const click = async(event) => {
        event.preventDefault();
        await axios.post('http://127.0.0.1:8000/getAdmin',  {admin})
        .then((response) => {
            if(response['data'] == 'success'){
                console.log(response)
                Nevigate('/HeaderFromMenu')
            }
            else
            {
                console.log("error");
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <div className="Header">
                オーダー実績管理システム
            </div>
            <div className='allelement'>
                <div className='screen'>
                    <div className='title'>
                        ログイン画面
                    </div>
                    <Form className='form'>
                        <Form.Group className='col-md-5 mx-auto'>
                            <Form.Label className='error1'>ユーザーID </Form.Label>
                            <Form.Control size='lg' type="text" placeholder='Enter ID' onChange={(event)=>changeAdmin(event)}></Form.Control>
                            <Form.Text className='text1'>エラーメッセージXXXX</Form.Text>
                            <Form.Label className='error2'>パスワード </Form.Label>
                            <Form.Control size='lg' type='password' placeholder="Enter Password" onChange={(event)=>changePassword(event)}></Form.Control>
                            <Form.Text className='text2'>エラーメッセージXXXX</Form.Text>
                            <Button className='click1' onClick={(event) => click(event)}>ログイン</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <footer className='footer1'>クラフト情報システム株式会社</footer>
        </div>
    )
}

export default Login;