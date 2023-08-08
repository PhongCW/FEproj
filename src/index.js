import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Menu from './MyComponent/Menu';
import HeaderFromMenu from './MyComponent/HeaderFromMenu';
import Staff_List from './MyComponent/Staff_List';
import SignUpStaff_List from './MyComponent/SignUpStaff_List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        </Route>
        <Route path='/HeaderFromMenu' element={<HeaderFromMenu></HeaderFromMenu>}>
          <Route index element={<Menu></Menu>}></Route>
          <Route path='/HeaderFromMenu/stafflist' element={<Staff_List></Staff_List>}></Route>
          <Route path='/HeaderFromMenu/SignUp' element={<SignUpStaff_List></SignUpStaff_List>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
