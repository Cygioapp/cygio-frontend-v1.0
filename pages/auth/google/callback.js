import { axiosInstance } from "@/components/utils/axios";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";

const Callback = () => {
  const router = useRouter();
  const [code, setCode] = useState("");

  const { mutate: mutateLogin } = useMutation(
    async ({ accessToken, code, idToken }) =>
      await axiosInstance.post("/accounts/google/", {
        access_token: idToken,
        code: code,
        id_token: accessToken,
      }),
    {
      onError: () => {
        router.push("/404");
      },
      onSuccess: () => {
        router.push("/");
      },
    }
  );

  const { mutate: mutateToken } = useMutation(
    async ({ postCode }) =>
      await axios.post(
        "https://oauth2.googleapis.com/token",
        `code=${postCode}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_SECRET}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CALLBACK_URL}&grant_type=authorization_code`,

        {
          Headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      ),
    {
      onError: () => {
        router.push("/404");
      },
      onSuccess: data => {
        mutateLogin({
          accessToken: data.data.access_token,
          code: code,
          idToken: data.data.id_token,
        });
      },
    }
  );

  useEffect(() => {
    const { query } = router;
    if (query && query.code) {
      setCode(query.code);
      mutateToken({ postCode: query.code });
    }
  }, [router.query]);
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
