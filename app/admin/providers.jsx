"use client";
import { SessionProvider } from "next-auth/react";

export default function AdminProviders({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}