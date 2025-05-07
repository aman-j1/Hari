import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import {
    LoginArea,
    Container,
    LoginInner,
    LoginShape,
    Shape1,
    Shape2,
    Shape3,
    Shape4,
    Shape5,
    Shape6,
    Row,
    LoginCol,
    LoginWrap,
    LoginTop,
    TopHeading,
    TopDescribe,
    LoginForm,
    Form,
    LoginInputWrap,
    LoginInputItem,
    LoginInput,
    Input,
    InputIconWrap,
    InputIcon,
    LoginBtn,
    LoginButton,
    RegisterSec,
    RegisterPara,
    RegisterParaLink,
    LoginInputEye
} from './style/register'

import axios from 'axios';

import Logo1 from '../../Image/laptop.webp';
import Logo2 from '../../Image/man.webp';
import Logo3 from '../../Image/shape-1.webp';
import Logo4 from '../../Image/shape-2.webp';
import Logo5 from '../../Image/shape-3.webp';
import Logo6 from '../../Image/shape-4.webp';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState('');
    const history = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const capitalizeName = (name) => {
        const nameParts = name.split(' ');
        return nameParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;

        // Capitalize name before submitting
        const capitalizedName = capitalizeName(name);

        // Check if email is valid
        if (!validateEmail(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        const nameParts = capitalizedName.trim().split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

        try {
            const res = await axios.post('https://hari-1-cbck.onrender.com/api/register', {
                firstName,
                lastName,
                email,
                password
            });

            setMessage(res.data.message || "Registration Successful!");
            setFormData({ name: '', email: '', password: '', confirmPassword: '' });
            history("/login");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Something went wrong. Please try again.");
            }
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
                                    <TopHeading>Register Now!</TopHeading>
                                    <TopDescribe>You can signup with your social account below</TopDescribe>
                                </LoginTop>
                                <LoginForm>
                                    <Form onSubmit={handleSubmit}>
                                        <LoginInputWrap>
                                            <LoginInputItem>
                                                <LoginInput>
                                                    <Input
                                                        placeholder="Enter your name"
                                                        id="name"
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                    <InputIconWrap>
                                                        <InputIcon width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M15.5 17.6C15.5 14.504 12.3626 12 8.5 12C4.63737 12 1.5 14.504 1.5 17.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </InputIcon>
                                                    </InputIconWrap>
                                                </LoginInput>
                                            </LoginInputItem>

                                            <LoginInputItem>
                                                <LoginInput>
                                                    <Input
                                                        placeholder="Enter your email"
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                    <InputIconWrap>
                                                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z" stroke="currentColor" strokeWidth="1.5" />
                                                            <path d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059" stroke="currentColor" strokeWidth="1.5" />
                                                        </svg>
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
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                    <InputIconWrap>
                                                        <InputIcon width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.20312 7.4V5.8C4.20312 3.152 5.00312 1 9.00312 1C13.0031 1 13.8031 3.152 13.8031 5.8V7.4" stroke="currentColor" strokeWidth="1.5" />
                                                            <path d="M9 14.2C10.1046 14.2 11 13.3045 11 12.2C11 11.0954 10.1046 10.2 9 10.2C7.89543 10.2 7 11.0954 7 12.2C7 13.3045 7.89543 14.2 9 14.2Z" stroke="currentColor" strokeWidth="1.5" />
                                                            <path d="M13 17H5C1.8 17 1 16.2 1 13V11.4C1 8.20002 1.8 7.40002 5 7.40002H13C16.2 7.40002 17 8.20002 17 11.4V13C17 16.2 16.2 17 13 17Z" stroke="currentColor" strokeWidth="1.5" />
                                                        </InputIcon>
                                                    </InputIconWrap>
                                                </LoginInput>
                                                <LoginInputEye>
                                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4028 7.1025L6.60781 10.8975C6.12031 10.41 5.82031 9.7425 5.82031 9C5.82031 7.515 7.02031 6.315 8.50531 6.315C9.24781 6.315 9.91531 6.615 10.4028 7.1025Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.86 4.32748C11.5475 3.33748 10.0475 2.79749 8.495 2.79749C5.8475 2.79749 3.38 4.35748 1.6625 7.05748C0.9875 8.11498 0.9875 9.89248 1.6625 10.95C2.255 11.88 2.945 12.6825 3.695 13.3275" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.82031 14.6475C6.67531 15.0075 7.58281 15.2025 8.50531 15.2025C11.1528 15.2025 13.6203 13.6425 15.3378 10.9425C16.0128 9.88504 16.0128 8.10754 15.3378 7.05004C15.0903 6.66004 14.8203 6.29254 14.5428 5.94754" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.1306 9.52505C10.9356 10.5826 10.0731 11.4451 9.01562 11.6401" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.6025 10.8975L1 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0009 1.5L10.3984 7.1025" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </LoginInputEye>
                                            </LoginInputItem>

                                            <LoginInputItem>
                                                <LoginInput>
                                                    <Input
                                                        placeholder="Confirm Password"
                                                        id="confirmPassword"
                                                        type="password"
                                                        name="confirmPassword"
                                                        value={formData.confirmPassword}
                                                        onChange={handleChange}
                                                    />
                                                    <InputIconWrap>
                                                        <InputIcon width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.20312 7.4V5.8C4.20312 3.152 5.00312 1 9.00312 1C13.0031 1 13.8031 3.152 13.8031 5.8V7.4" stroke="currentColor" strokeWidth="1.5" />
                                                            <path d="M9 14.2C10.1046 14.2 11 13.3045 11 12.2C11 11.0954 10.1046 10.2 9 10.2C7.89543 10.2 7 11.0954 7 12.2C7 13.3045 7.89543 14.2 9 14.2Z" stroke="currentColor" strokeWidth="1.5" />
                                                            <path d="M13 17H5C1.8 17 1 16.2 1 13V11.4C1 8.20002 1.8 7.40002 5 7.40002H13C16.2 7.40002 17 8.20002 17 11.4V13C17 16.2 16.2 17 13 17Z" stroke="currentColor" strokeWidth="1.5" />
                                                        </InputIcon>
                                                    </InputIconWrap>
                                                </LoginInput>
                                                <LoginInputEye>
                                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4028 7.1025L6.60781 10.8975C6.12031 10.41 5.82031 9.7425 5.82031 9C5.82031 7.515 7.02031 6.315 8.50531 6.315C9.24781 6.315 9.91531 6.615 10.4028 7.1025Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.86 4.32748C11.5475 3.33748 10.0475 2.79749 8.495 2.79749C5.8475 2.79749 3.38 4.35748 1.6625 7.05748C0.9875 8.11498 0.9875 9.89248 1.6625 10.95C2.255 11.88 2.945 12.6825 3.695 13.3275" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.82031 14.6475C6.67531 15.0075 7.58281 15.2025 8.50531 15.2025C11.1528 15.2025 13.6203 13.6425 15.3378 10.9425C16.0128 9.88504 16.0128 8.10754 15.3378 7.05004C15.0903 6.66004 14.8203 6.29254 14.5428 5.94754" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.1306 9.52505C10.9356 10.5826 10.0731 11.4451 9.01562 11.6401" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.6025 10.8975L1 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0009 1.5L10.3984 7.1025" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </LoginInputEye>
                                            </LoginInputItem>
                                        </LoginInputWrap>

                                        <LoginBtn>
                                            <LoginButton type="submit">Sign Up</LoginButton>
                                        </LoginBtn>

                                        {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}
                                    </Form>

                                    <RegisterSec>
                                        <RegisterPara>
                                            Already have an account? <RegisterParaLink to="/login">Login</RegisterParaLink>
                                        </RegisterPara>
                                    </RegisterSec>
                                </LoginForm>
                            </LoginWrap>
                        </LoginCol>
                    </Row>
                </LoginInner>
            </Container>
        </LoginArea>
    )
};

export default Register;
