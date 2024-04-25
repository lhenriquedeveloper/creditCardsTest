"use client";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { checkIsPublicRoute } from "@/function/check-is-public-route";
import PrivateRoute from "@/components/privateRoute";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname);

  return (
    <html lang="pt-br" data-theme="dark">
      <title>Credit Card Manager</title>
      <body className={inter.className}>
        {isPublicPage && children}
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  );
}
