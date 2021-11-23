import React from "react";
import Link from 'next/link'
import sidebarDump from "../../dump/nav.json";
import Logout from "../../icon/Logout";
import {  signOut } from "next-auth/client";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar bg-red-800 text-red-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* logo */}
        <a href="#" className="text-white flex items-center space-x-2 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
          <span className="text-2xl font-extrabold">Admin</span>
        </a>
        {/* nav */}
        <nav>
          <Link
            href="/dashboard"
          >
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-red-700 hover:text-white">Dashboard</a>
          </Link>

          {sidebarDump.map(item => (
            <Link
            href={item.route}
            
          >
                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-red-700 hover:text-white">{item.menu_name}</a>
            
          </Link>
          ))}
          
        </nav>
        <div className="bottom-0 fixed  h-10 w-full mr-auto p-0 cursor-pointer">
        
        <Logout onClick={signOut}/>
          
        </div>
      </div>
    </>
  );
}
