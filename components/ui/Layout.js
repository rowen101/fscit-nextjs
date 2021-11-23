import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useSession } from "next-auth/client";
export default function Layout({ children }) {
  const [session, loading] = useSession();


  return (
    <>
      
        <div className="relative min-h-screen flex">
             {/* <Navbar /> */}
             {session && (
          <Sidebar />
          )}
          <div className="flex-1 p-10 text-2x1">{children}</div>
        </div>
      
      
    </>
  );
}
