import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

import {
    LoginArea, Container, LoginInner, LoginShape, Shape1, Shape2, Shape3, Shape4, Shape5, Shape6,
    Row, LoginCol, LoginWrap, LoginTop, TopHeading, TopDescribe, LoginForm, Form, LoginInputWrap,
    LoginInputItem, LoginInput, Input, InputIconWrap, InputIcon, LoginOption, LoginRemember,
    LoginRemInput, LoginInputLabel, LoginForgot, LoginLink, LoginBtn, LoginButton,
    RegisterSec, RegisterPara, RegisterParaLink, LoginInputEye
} from './style/login';

import Logo1 from '../../Image/laptop.webp';
import Logo2 from '../../Image/man.webp';
import Logo3 from '../../Image/shape-1.webp';
import Logo4 from '../../Image/shape-2.webp';
import Logo5 from '../../Image/shape-3.webp';
import Logo6 from '../../Image/shape-4.webp';

import { AuthContext } from "../../Context/authContext";

function Login() {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // 🔐 Traditional login
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/login', {
                email,
                password
            });

            const { token, userData } = res.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(userData)); // save full user data including cart

            Toastify({
                text: "Login Successful!",
                duration: 2000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "white",
                border: "1px solid #ccc",
                color: "#000",
                stopOnFocus: true,
                progressBar: true,
                className: "green-toast"
            }).showToast();

            login({ ...userData, token }); // update context
            navigate('/');
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);

            Toastify({
                text: error.response?.data?.message || "Login failed.",
                duration: 2000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "fff",
                stopOnFocus: true,
                progressBar: true,
                className: "red-toast"
            }).showToast();
        }
    };

    // 🔐 Google login
    const handleGoogleLoginSuccess = async (credentialResponse) => {
        try {
            const token = credentialResponse.credential;

            if (!token) {
                throw new Error("No credential received from Google.");
            }

            const res = await axios.post('http://localhost:5000/api/google-login', {
                token
            });

            const { token: jwtToken, userData } = res.data;

            localStorage.setItem('token', jwtToken);
            localStorage.setItem('user', JSON.stringify(userData));

            Toastify({
                text: "Google login successful!",
                duration: 2000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "#4caf50",
                stopOnFocus: true,
                progressBar: true,
                className: "green-toast"
            }).showToast();

            login({ ...userData, token: jwtToken });
            navigate('/');
        } catch (error) {
            console.error("Google login error:", error.response?.data || error.message);

            Toastify({
                text: "Google login failed. Try again.",
                duration: 2000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "#ff4d4f",
                stopOnFocus: true,
                className: "red-toast"
            }).showToast();
        }
    };

    return (
        <LoginArea>
            <Container>
                <LoginInner>
                    <LoginShape>
                        <Shape1 src={Logo1} alt="Shape 1" />
                        <Shape2 src={Logo2} alt="Shape 2" />
                        <Shape3 src={Logo3} alt="Shape 3" />
                        <Shape4 src={Logo4} alt="Shape 4" />
                        <Shape5 src={Logo5} alt="Shape 5" />
                        <Shape6 src={Logo6} alt="Shape 6" />
                    </LoginShape>
                    <Row>
                        <LoginCol>
                            <LoginWrap>
                                <LoginTop>
                                    <TopHeading>Hello Again</TopHeading>
                                    <TopDescribe>Enter your credentials to access your account.</TopDescribe>
                                </LoginTop>
                                <LoginForm>
                                    <Form onSubmit={handleLogin}>
                                        <LoginInputWrap>
                                            <LoginInputItem>
                                                <LoginInput>
                                                    <Input
                                                        placeholder="Enter your email"
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <InputIconWrap>
                                                        <InputIcon width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.5 17.6C15.5 14.504 12.3626 12 8.5 12C4.63737 12 1.5 14.504 1.5 17.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></InputIcon>
                                                    </InputIconWrap>
                                                </LoginInput>
                                            </LoginInputItem>

                                            <LoginInputItem>
                                                <LoginInput>
                                                    <Input
                                                        placeholder="Password"
                                                        id="password"
                                                        type="password"
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                    <InputIconWrap>
                                                        <InputIcon width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.20312 7.4V5.8C4.20312 3.152 5.00312 1 9.00312 1C13.0031 1 13.8031 3.152 13.8031 5.8V7.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 14.2C10.1046 14.2 11 13.3045 11 12.2C11 11.0954 10.1046 10.2 9 10.2C7.89543 10.2 7 11.0954 7 12.2C7 13.3045 7.89543 14.2 9 14.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13 17H5C1.8 17 1 16.2 1 13V11.4C1 8.20002 1.8 7.40002 5 7.40002H13C16.2 7.40002 17 8.20002 17 11.4V13C17 16.2 16.2 17 13 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></InputIcon>
                                                    </InputIconWrap>
                                                </LoginInput>
                                                <LoginInputEye>
                                                    {/* Eye Icon SVG */}
                                                </LoginInputEye>
                                            </LoginInputItem>
                                        </LoginInputWrap>

                                        <LoginOption>
                                            <LoginRemember>
                                                <LoginRemInput type="checkbox" id="tp-remember" />
                                                <LoginInputLabel htmlFor="tp-remember">Remember Me</LoginInputLabel>
                                            </LoginRemember>
                                            <LoginForgot>
                                                <LoginLink to="/forgot">Forgot Password?</LoginLink>
                                            </LoginForgot>
                                        </LoginOption>

                                        <LoginBtn>
                                            <LoginButton type="submit">Sign In</LoginButton>
                                        </LoginBtn>
                                    </Form>

                                    {/* 👉 Google Login Button */}
                                    <div style={{ marginTop: '20px', textAlign: 'center', marginBlockEnd: "15px" }}>
                                        <GoogleLogin
                                            onSuccess={handleGoogleLoginSuccess}
                                            onError={() => {
                                                Toastify({
                                                    text: "Google Sign In was unsuccessful",
                                                    duration: 2000,
                                                    close: true,
                                                    gravity: "top",
                                                    position: "center",
                                                    backgroundColor: "#ff4d4f",
                                                    stopOnFocus: true,
                                                    className: "red-toast"
                                                }).showToast();
                                            }}
                                        />
                                    </div>

                                    <RegisterSec>
                                        <RegisterPara>
                                            Don’t have an account? <RegisterParaLink to="/register">Register Now</RegisterParaLink>
                                        </RegisterPara>
                                    </RegisterSec>
                                </LoginForm>
                            </LoginWrap>
                        </LoginCol>
                    </Row>
                </LoginInner>
            </Container>
        </LoginArea>
    );
}

export default Login;
