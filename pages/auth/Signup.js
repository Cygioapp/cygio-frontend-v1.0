import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Form, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import icon from "../../src/images/cygio-icon.png";
import { axiosInstance } from "@/utils/axios";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import logo from "../../src/images/cygio-logo.png";
import { useMutation } from "react-query";
import { useState } from "react";
import { useRouter } from "next/router";

export default function signup() {
    const router = useRouter();
    const regForm =
    {
        email: '',
        phone: '',
        password: ''
    }

    const [signup, setSignup] = useState(regForm)

    const handleChange = ({ target: { name, value } }) => {
        setSignup((p) => ({ ...p, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signup)
    };

    return (
        <>
            <Head>
                <title>Cygio - login or sign up</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="">
                {/* {JSON.stringify(signup)} */}
                <Row className="m-0">
                    <Col md={6} className="auth_page left_col">
                        <div className="text-center">
                            {/* <p className="auth_heading">Cygio</p> */}
                            <p className="auth_heading">
                                Promoting Brand Inclusivity for African Businesses!
                            </p>
                            <p className="auth_p">
                                We Are Driving Brand Inclusion For African Businesses Through
                                Social Media
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className="auth_page">
                        <Card className="shadow auth_card p-4">
                            <div
                                className="mb-3"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Image src={icon} width={50} alt="cygio-icon" />
                                <Image src={logo} width={120} alt="cygio-logo" />
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <div>
                                    <label className="input_label">Email</label>
                                    <input
                                        className="auth_field mb-2"
                                        type="email"
                                        name="email"
                                        value={signup.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="input_label">Phone</label>
                                    <input
                                        className="auth_field mb-2"
                                        type="number"
                                        name="phone"
                                        value={signup.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="input_label">Password</label>
                                    <input
                                        className="auth_field mb-3"
                                        type="password"
                                        name="password"
                                        value={signup.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="">
                                    <button className="auth_btn mb-3">Register</button>
                                </div>
                            </Form>
                            <div className="text-center">
                                <p className="auth_mssg login_with">Or Signup with</p>
                            </div>
                            <hr className="m-0 line" />
                            <div className="auth_icon_group mb-3">
                                <button className="auth_icon_div" onClick={() => { }}>
                                    <BsFacebook size="1.5rem" /> Facebook
                                </button>
                                <button
                                    className="auth_icon_div"
                                >
                                    <BsGoogle size="1.5rem" /> Google
                                </button>
                            </div>
                            <div className="text-center">
                                <p className="auth_mssg">
                                    Already have an account? |{" "}
                                    <Link href="/" className="_link">
                                        Log in here
                                    </Link>
                                </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}
