import { axiosInstance } from "@/components/utils/axios";
import axios from "axios";
import Head from "next/head";
import React from "react";

const Callback = () => {
  return (
    <>
      <Head>
        <title>Redirecting...</title>
      </Head>
      <section>Redirecting...</section>
    </>
  );
};

export default Callback;

export async function getServerSideProps({ query, res }) {
  try {
    const code = query.code;
    const googleResponse = await axios.post(
      "https://oauth2.googleapis.com/token",
      `code=${code}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_SECRET}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CALLBACK_URL}&grant_type=authorization_code`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const postResponse = await axiosInstance.post("/accounts/google/", {
      access_token: googleResponse.data.id_token,
      code: code,
      id_token: googleResponse.data.access_token,
    });
    res.setHeader("Set-Cookie", postResponse.headers["set-cookie"]);

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
