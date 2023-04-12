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
    console.log(googleResponse)
    const postResponse = await axiosInstance.post("/accounts/google/", {
      access_token: googleResponse.data.id_token,
      code: code,
      id_token: googleResponse.data.access_token,
    });
    console.log(postResponse)

    res.setHeader("Set-Cookie", postResponse.headers["set-cookie"]);

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } catch (error) {
    const response = error.response?.data;
    if (
      response?.non_field_errors &&
      Array.isArray(response?.non_field_errors) &&
      response?.non_field_errors.length === 1

      // send a get request to fetch user current auth provider and then suggest 
      // it to the user, in cases where the user might have forgotten the 
      // auth method he used.
    ) {
      return {
        redirect: {
        destination: `/404?error=${encodeURIComponent(response?.non_field_errors[0],)}`,
        permanent: false
      }
      };
    }
  
    return false;
    /*
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
    */
  }
}
