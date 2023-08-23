"use client";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const UserLinks = () => {
  const { data, status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div className="flex items-center justify-center gap-4 cursor-pointer">
          <Link href="/orders">Orders</Link>
          <span onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;
