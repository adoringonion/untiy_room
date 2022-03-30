import { GetServerSideProps } from "next";
import { supabaseClient } from "./supabaseClient";


export const requiredAuth: GetServerSideProps = async ({ req }) => {
  const { user }  = await supabaseClient.auth.api.getUserByCookie(req);
  if (user === null) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: { user },
  };
};
