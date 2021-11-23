import React, { useState, useEffect } from "react";
import { Provider, useSession } from "next-auth/client";
import "../styles/globals.css";
import Layout from "../components/ui/Layout";
function MyApp({ pageProps, Component }) {
  const [session, loading] = useSession();
  return (
    <React.Fragment>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
