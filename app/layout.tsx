
import "./globals.css";

export const metadata = {
  title: "Student Dashboard",
  description: "Student assignment dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
