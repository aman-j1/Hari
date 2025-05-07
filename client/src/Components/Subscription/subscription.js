import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    SubscribeArea,
    Containers,
    CtaInner,
    Row,
    SuscribeCol,
    SubscribeTitle,
    Form,
    CtaInput,
    CtaInputField,
    CTAButton
} from './style/subscribe';

export function Subscription() {
    const [email, setEmail] = useState('');
    const API_BASE = "http://localhost:3002/UserApi";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE}/subscribe`, { email });

            if (response.status === 201) {
                toast.success(response.data.message || "Subscribed successfully!");
                setEmail('');
            }
        } catch (err) {
            toast.error(err.response?.data?.message || 'Subscription failed');
        }
    };

    return (
        <SubscribeArea>
            <Containers>
                <CtaInner>
                    <Row>
                        <SuscribeCol>
                            <SubscribeTitle>
                                Subscribe for <br /> Latest Trends &amp; Offers
                            </SubscribeTitle>
                        </SuscribeCol>
                        <SuscribeCol>
                            <Form onSubmit={handleSubmit}>
                                <CtaInput>
                                    <CtaInputField
                                        type="email"
                                        placeholder="Enter Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <CTAButton type="submit">Subscribe</CTAButton>
                                </CtaInput>
                            </Form>
                            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
                        </SuscribeCol>
                    </Row>
                </CtaInner>
            </Containers>
        </SubscribeArea>
    );
}
