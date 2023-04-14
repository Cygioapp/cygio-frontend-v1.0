import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Form, Row } from "reactstrap";
import icon from "../../src/images/cygio-icon.png";
import { axiosInstance } from "@/utils/axios";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import logo from "../../src/images/cygio-logo.png";
import promo from "../../src/images/promo (4).svg";
import { useMutation } from "react-query";
import { useState } from "react";
import { useRouter } from "next/router";

export default function signup() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { mutate, isLoading } = useMutation(
    async ({ first_name, last_name, email, password }) =>
      await axiosInstance.post("/accounts/registration/", {
        first_name,
        last_name,
        email,
        password1: password,
        password2: password,
      }),
    {
      onError: error => {
        setError(error.response.data.email[0]);
      },
      onSuccess: data => {
        router.push("/auth/email-verification-sent");
      },
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    mutate({
      first_name: firstName,
      last_name: lastName,
      email: email.toLocaleLowerCase(),
      password: password,
    });
  };

  return (
    <>
      <Head>
        <title>Cygio - Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        {/* {JSON.stringify(signup)} */}
        <Row className="m-0">
          <Col md={6} className="auth_page left_col">
            <div className="text-center">
              <Image src={promo} alt="image" width={200} />
              <p className="auth_heading">
                Promoting Brand Inclusivity for African Businesses!
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
                  <label className="input_label">First Name</label>
                  <input
                    className="auth_field mb-2"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="input_label">Last Name</label>
                  <input
                    className="auth_field mb-2"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="input_label">Email</label>
                  <input
                    className="auth_field mb-2"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  {error && <p className="text-danger text-xs">{error}</p>}
                </div>
                <div>
                  <label className="input_label">Password</label>
                  <input
                    className="auth_field mb-3"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="">
                  <button className="auth_btn mb-3" disabled={isLoading}>
                    Register
                  </button>
                </div>
              </Form>
              <div className="text-center">
                <p className="auth_mssg login_with">Or Signup with</p>
              </div>
              <hr className="m-0 line" />
              <div className="auth_icon_group mb-3">
                <button
                  className="auth_icon_div"
                  onClick={() => {
                    router.push(
                      `https://www.facebook.com/v16.0/dialog/oauth?client_id=${process.env.NEXT_PUBLIC_FACEBOOK_OAUTH_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_FACEBOOK_OAUTH_CALLBACK_URL}&response_type=code&display=popup`
                    );
                  }}
                >
                  <BsFacebook size="1.5rem" /> Facebook
                </button>
                <button
                  className="auth_icon_div"
                  onClick={() =>
                    router.push(
                      `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CALLBACK_URL}&prompt=consent&response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}&scope=openid%20email%20profile&access_type=offline`
                    )
                  }
                >
                  <BsGoogle size="1.5rem" /> Google
                </button>
              </div>
              <div className="text-center">
                <p className="auth_mssg">
                  Already have an account? |{" "}
                  <Link href="/auth/login" className="_link">
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
