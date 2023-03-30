import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Form, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import icon from "../src/images/cygio-icon.png";
import { axiosInstance } from "@/utils/axios";

import { BsFacebook, BsGoogle } from "react-icons/bs";
import logo from "../src/images/cygio-logo.png";
import { useMutation } from "react-query";
import { useState } from "react";
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useMutation(
    async ({ email, password }) =>
      await axiosInstance.post("/accounts/login/", {
        email,
        password,
      }),
    {
      onError: error => {},
      onSuccess: data => {},
    }
  );
  const handleSubmit = async e => {
    e.preventDefault();
    mutate({
      email: email,
      password: password,
    });
  };
  return (
    <>
      <Head>
        <title>Cygio - login or sign up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Row className="m-0">
          <Col md={6} className="auth_page left_col">
            <div className="text-center">
              <p className="auth_heading">[Cygio]</p>
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="input_label">Password</label>
                  <input
                    className="auth_field mb-3"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="">
                  <button className="auth_btn mb-3">Log in</button>
                </div>
              </Form>
              <div className="text-center">
                <p className="auth_mssg login_with">Or Log in with</p>
              </div>
              <hr className="m-0 line" />
              <div className="auth_icon_group mb-3">
                <div className="auth_icon_div">
                  <BsFacebook size="1.5rem" /> Facebook
                </div>
                <div className="auth_icon_div">
                  <BsGoogle size="1.5rem" /> Google
                </div>
              </div>
              <div className="text-center">
                <p className="auth_mssg">
                  Don't have an account? |{" "}
                  <Link href="/auth/signup" className="_link">
                    Sign up here
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
