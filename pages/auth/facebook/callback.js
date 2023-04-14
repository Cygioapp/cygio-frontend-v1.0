import { axiosInstance } from "@/components/utils/axios";
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
    const postResponse = await axiosInstance.post("/accounts/facebook/", {
      code: code,
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
