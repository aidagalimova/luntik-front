import React, {useEffect, useState} from 'react';
import { Button, Modal, Form, Input, Row, Col } from "antd";
import "./index.scss";
import {useDispatch, useSelector} from "react-redux";
import { authenticate, currentUser, register } from "../../store/actions/userActions";
import { Redirect } from 'react-router-dom';


export function SignWindow() {


    const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isAuth = useSelector(state => state.user.isAuth)
    const current = useSelector(state => state.user.currentUser)
    
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSigninModal, setIsSigninModal] = useState(true);
    

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsSigninModal(true);
        setIsModalVisible(false);
    };
    const setSign = (isSignIn) => {
        setIsSigninModal(isSignIn);
    }
   

    const onSignin = (values) => {
        console.log(values);
        dispatch(authenticate(values["email"], values["password"]))
        setEmail(values["email"])
        setPassword(values["password"])
    
    }

    const onSignup = (values) => {
        console.log(values)
       dispatch(register(values["электронный адрес"], values["имя"], values["пароль"]));
        
    };


    const Signup = () => (

        <div className="sign">
           <Form
               validateMessages={validateMessages}
               onFinish={onSignup}
           >
               <Form.Item
                   name="электронный адрес"
                   rules={[{
                       required: true,
                       type: 'email'
                   }]}
                   className="item">
                   <Input className="input" placeholder="Электронный адрес" />
               </Form.Item>
               <Form.Item
                   name="имя"
                   rules={[{ required: true, max: 10, min: 3 }]}
                   className="item">
                   <Input className="input" placeholder="Имя" />
               </Form.Item>
               <Form.Item
                   name="пароль"
                   dependencies={["пароль2"]}
                   rules={[{
                       required: true,
                       min: 8
                   }]}
                   className="item">
                   <Input.Password className="input" placeholder="Пароль" />
               </Form.Item>
               <Form.Item
                   name="пароль2"
                   rules={[
                       ({ getFieldValue }) => ({
                           validator(rule, value) {
                               if (getFieldValue("пароль") !== value) {
                                   return Promise.reject(["Пароли должны совпадать"]);
                               }
                               return Promise.resolve();
                           }
                       })]}
                   dependencies={["пароль"]}
                   className="item">
                   <Input.Password className="input" placeholder="Повторите пароль" />
               </Form.Item>
               <Button type="primary" htmlType="submit" className="signup-btn">
                   <h2 className="btnText">Зарегестрироваться</h2>
               </Button>
           </Form>
       </div>
       
    )

const Signin = () => (    
    <div className="sign">
        <Form
            validateMessages={validateMessages}
            onFinish={onSignin}>
            <Form.Item
                name="email"
                rules={[{
                    required: true,
                    type: 'email'
                }]}
                className="item">
                <Input className="input" placeholder="Электронный адрес" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{
                    required: true
                }]}
                className="item">
                <Input.Password className="input" placeholder="Пароль" />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="signin-btn">
                <h2 className="btnText">Войти</h2>
            </Button>
        </Form>
    </div>
)





useEffect(() => {
     dispatch(() => currentUser(email))
},[isAuth])





return (
    <>

    {!isAuth &&
        <h1 
        className="lk-text"
        onClick={showModal} >Войти</h1>
    }

    {isAuth &&
        
         <h1 
         className="lk-text"
        ><a href = '/profile'>Личный кабинет</a></h1>
    }

        <Modal
            visible={isModalVisible}
            onCancel={handleCancel}
            className="form"
            footer={null}>
            {isSigninModal ?
                <>
                    <Row>
                        <Col span={9} offset={3}><h1 className="main-title">Вход</h1></Col>
                        <Col span={12}><h2 className="not-main-title" onClick={() => setSign(false)}>Регистрация</h2></Col>
                    </Row>
                    <Signin />
                </> :
                <>
                    <Row>
                        <Col span={12} offset={3}> <h1 className="main-title">Регистрация</h1></Col>
                        <Col span={9}> <h2 className="not-main-title" onClick={() => setSign(true)}>Вход</h2></Col>
                    </Row>
                    <Signup />
                </>
            }
        </Modal>
    </>
)
}
const validateMessages = {
types: {
    email: 'Невалидный электронный адрес',
},
required: 'Введите ${name}',
string: {
    range: "Длина должна быть от ${min} до ${max}",
    min: "Минимальная длина ${min} символов"
}
};







export default SignWindow; 