import { axiosInstance } from "@/components/utils/axios";
import React from "react";

const Key = () => {
  return (
    <section>
      <h1>redirecting...</h1>
    </section>
  );
};

export default Key;

export async function getServerSideProps({ params }) {
  try {
    await axiosInstance.post("/accounts/registration/verify-email/", {
      key: params.key,
    });
    return {
      redirect: {
        destination: "/auth/confirm-email/success",
        permanent: false,
      },
    };
  } catch (error) {
    if (error.response?.status === 404) {
      return {
        redirect: {
          destination: "/auth/confirm-email/failed",
          permanent: false,
        },
      };
    }
  }
}
