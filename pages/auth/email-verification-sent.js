import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col, Form, Row } from "reactstrap";
import promo from "../../src/images/promo (4).svg";
import { useState } from "react";
import { axiosInstance } from "@/components/utils/axios";
import { useMutation } from "react-query";

export default function Login() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");

  const { mutate } = useMutation(
    async ({ email }) =>
      await axiosInstance.post("/accounts/registration/resend-email/", {
        email: email,
      }),
    {
      onError: error => {},
      onSuccess: data => {},
    }
  );
  const handleFormSubmit = event => {
    event.preventDefault();
    mutate({ email: email.toLocaleLowerCase() });
  };
  return (
    <>
      <Head>
        <title>Cygio - Email Verification Sent</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Row className="m-0">
          <Col md={6} className="auth_page left_col">
            <div className="text-center">
              <Image src={promo} alt="image" width={200} />
              <p className="auth_heading" style={{ padding: "0 55px" }}>
                Promoting Brand Inclusivity for African Businesses!
              </p>
            </div>
          </Col>
          <Col md={6} className="auth_page">
            <Card className="shadow auth_card p-4">
              {!showForm ? (
                <div className="text-center">
                  <p className="text-success px-5 py-2">
                    Your account has been created successfully and we have sent
                    you an email with link to verify your account. If you
                    receive do not receive an email from us withing the next few
                    minutes.
                    <Button onClick={() => setShowForm(true)}>
                      Request for activation link.
                    </Button>
                  </p>
                  <Link href="/auth/login" passHref>
                    <button className="auth_btn mb-3">Back to Log in</button>
                  </Link>
                </div>
              ) : (
                <>
                  <Form onSubmit={handleFormSubmit}>
                    <div>
                      <label className="input_label">Email</label>
                      <input
                        className="auth_field mb-2"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="">
                      <button className="auth_btn mb-3">Resend</button>
                    </div>
                  </Form>
                  <center>
                    <Link href="/">Back to home</Link>
                  </center>
                </>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
