import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
