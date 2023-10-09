import './globals.scss';
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Inverse Template',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
