import "./globals.css";

export const metadata = {
  title: "CV Web - Andika Dwiguna",
  description: "Curriculum Vitae Web menggunakan Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}