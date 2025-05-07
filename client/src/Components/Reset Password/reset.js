import React, { useState } from 'react';
import axios from 'axios';
import {
    LoginArea, Container, LoginInner, LoginShape, Shape1, Shape2, Shape3, Shape4, Shape5, Shape6,
    Row, LoginCol, LoginWrap, LoginTop, TopHeading, TopDescribe, LoginForm, Form, LoginInputWrap,
    LoginInputItem, LoginInput, Input, InputIconWrap, InputIcon, LoginBtn, LoginButton,
    RegisterSec, RegisterPara, RegisterParaLink
} from './style/reset';

import Logo1 from '../../Image/laptop.webp';
import Logo2 from '../../Image/man.webp';
import Logo3 from '../../Image/shape-1.webp';
import Logo4 from '../../Image/shape-2.webp';
import Logo5 from '../../Image/shape-3.webp';
import Logo6 from '../../Image/shape-4.webp';

export default function Reset() {
    const [step, setStep] = useState(1); // 1: email, 2: OTP, 3: password
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSendingOtp, setIsSendingOtp] = useState(false);

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setIsSendingOtp(true);
        try {
            const response = await axios.post('http://localhost:3002/UserApi/send-otp', { email });
            setToken(response.data.token);
            setStep(2);
            setMessage('OTP sent to your email.');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Failed to send OTP.');
        } finally {
            setIsSendingOtp(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const decoded = await axios.post('http://localhost:3002/UserApi/verify-otp', {
                otp,
                token,
                newPassword: 'placeholder',
            });

            if (decoded.status === 200 && decoded.data.message === 'Invalid OTP') {
                setMessage('Invalid OTP.');
                return;
            }

            setStep(3);
            setMessage('OTP verified. Please enter a new password.');
        } catch (error) {
            setMessage(error.response?.data?.message || 'OTP verification failed or expired.');
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3002/UserApi/verify-otp', { otp, token, newPassword });
            setMessage('Password reset successful.');
            // Optionally redirect to login
        } catch (error) {
            setMessage(error.response?.data?.message || 'Failed to reset password.');
        }
    };

    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <Form onSubmit={handleSendOtp}>
                        <LoginInputWrap>
                            <LoginInputItem>
                                <LoginInput>
                                    <Input
                                        placeholder="Enter your email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </LoginInput>
                                <InputIconWrap>
                                <InputIcon width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></InputIcon>
                                </InputIconWrap>
                            </LoginInputItem>
                        </LoginInputWrap>
                        <LoginBtn>
                            <LoginButton type="submit" disabled={isSendingOtp}>
                                {isSendingOtp ? (
                                    <>
                                        <span className="spinner" /> Sending...
                                    </>
                                ) : (
                                    'Send OTP'
                                )}
                            </LoginButton>
                        </LoginBtn>
                    </Form>
                );
            case 2:
                return (
                    <Form onSubmit={handleVerifyOtp}>
                        <LoginInputWrap>
                            <LoginInputItem>
                                <LoginInput>
                                    <Input
                                        placeholder="Enter OTP"
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                </LoginInput>
                            </LoginInputItem>
                        </LoginInputWrap>
                        <LoginBtn>
                            <LoginButton type="submit">Verify OTP</LoginButton>
                        </LoginBtn>
                    </Form>
                );
            case 3:
                return (
                    <Form onSubmit={handleResetPassword}>
                        <LoginInputWrap>
                            <LoginInputItem>
                                <LoginInput>
                                    <Input
                                        placeholder="Enter new password"
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </LoginInput>
                            </LoginInputItem>
                        </LoginInputWrap>
                        <LoginBtn>
                            <LoginButton type="submit">Reset Password</LoginButton>
                        </LoginBtn>
                    </Form>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <style>{`
                .spinner {
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    border: 2px solid rgba(0, 0, 0, 0.2);
                    border-top-color: #000;
                    border-radius: 50%;
                    animation: spin 0.6s linear infinite;
                    margin-right: 8px;
                    vertical-align: middle;
                }
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
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
                                        <TopHeading>Forgot Password?</TopHeading>
                                        <TopDescribe>
                                            {step === 1 && 'Enter your email to receive OTP.'}
                                            {step === 2 && 'Enter the OTP sent to your email.'}
                                            {step === 3 && 'Enter a new password to complete reset.'}
                                        </TopDescribe>
                                        {message && <p style={{ color: 'red' }}>{message}</p>}
                                    </LoginTop>

                                    <LoginForm>
                                        {renderForm()}
                                        <RegisterSec>
                                            <RegisterPara>
                                                Remember your password? <RegisterParaLink to="/login">Login</RegisterParaLink>
                                            </RegisterPara>
                                        </RegisterSec>
                                    </LoginForm>
                                </LoginWrap>
                            </LoginCol>
                        </Row>
                    </LoginInner>
                </Container>
            </LoginArea>
        </>
    );
}
