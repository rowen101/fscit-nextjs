import React from "react";
import Link from "next/link";

export default function breadcrumb({ activePage,currentPage }) {
  return (
    <nav class="bg-grey-light rounded font-sans w-full">
      <ol class="list-reset flex text-grey-dark">
        <li>
          <a href="/" class="font-bold">
            Home
          </a>
        </li>
        {activePage.map((item) => (
          <>
            <li>
              <span class="mx-2">/</span>
            </li>
            <li>
              <a href={item.route} class="font-bold">
                {item.page}
              </a>
            </li>
          </>
        ))}

        <li>
          <span class="mx-2">/</span>
        </li>
        <li>{currentPage}</li>
      </ol>
    </nav>
  );
}
