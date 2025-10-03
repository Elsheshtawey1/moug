import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Moga wash",
  description: "We are a digital platform specialized in connecting customers with the best laundries and agencies in Saudi Arabia. We strive to provide high-quality and easy-to-use service",
  icons: {
    icon: "/image/موج.svg",
    
    shortcut: "/image/Component 7 .png",
    apple: "/image/Component 7 .png",
    username: "mohamed_Elsheshtawey",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
