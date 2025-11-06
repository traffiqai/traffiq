import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Traffiq - Control Your AI Visibility',
  description: 'Get mentioned by LLMs. Track and optimize your presence across AI search platforms.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
