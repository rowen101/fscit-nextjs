import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useSession } from "next-auth/client";
import Head from "next/head";
export default function Layout({ children }) {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>FSC IT Monitoring</title>
        <script type="text/javascript" src="script.js"></script>
      </Head>
      <Navbar />
      <div className="relative min-h-screen flex">
        {/* <Navbar /> */}
        {session && <Sidebar />}
        <div className="flex-1 p-10 text-2x1">{children}</div>
      </div>
    </>
  );
}
