import type {Metadata} from 'next';
import '@/app/globals.css';
import React from 'react';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
    title: 'iPhone App',
    description: 'Eine iPhone-ähnliche Web-App',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
                                   children,
                               }: {
    children: React.ReactNode;
}) {
    return (
        <html>
        <body className={`${inter.className} bg-gray-900 min-h-screen max-h-screen flex gap-4 flex-col items-center justify-center`}>
        {children}
        </body>
        </html>

    );
}