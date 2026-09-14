import "./globals.css";

export const metadata = {
  title: "CPRG 306: Web Development 2 - Assignments",
  description: "Weekly assignments for CPRG 306: Web Development 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
