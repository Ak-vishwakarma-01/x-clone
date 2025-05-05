import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{                //Readonly<{ children: React.ReactNode }> ensures the props are immutable (a common pattern for layout components)
  children: React.ReactNode; //React.ReactNode is the TypeScript type for anything that can be rendered in React (strings, JSX, numbers, fragments, etc.)
}>) {
  return (
    <html lang="en">
      <body>{children} test</body>
    </html>
  );
}
