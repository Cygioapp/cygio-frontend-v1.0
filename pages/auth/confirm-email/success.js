import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Row } from "reactstrap";
import promo from "../../../src/images/promo (4).svg";

export default function Sucess() {
  return (
    <>
      <Head>
        <title>Cygio - Email Confirmed</title>
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
              <div className="text-center">
                <p className="text-success px-5 py-2">
                  Your account has been activated successfully. You can now
                  proceed to Log in.
                </p>
                <Link href="/auth/login" passHref>
                  <button className="auth_btn mb-3">Log in</button>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
