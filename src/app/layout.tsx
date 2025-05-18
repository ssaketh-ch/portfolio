import '@/lib/globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/ui/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://safetpojskic.com'),
    title: 'Saketh Cherukuri',
    description: 'Welcome to my personal portfolio!',
    applicationName: 'Saketh Cherukuri',
    keywords: ['Saketh Cherykuri', 'portfolio', 'personal', 'website', 'developer', 'programmer', 'engineer', 'software', 'student'],
    openGraph: {
        siteName: 'Saketh Cherukuri',
        title: 'Saketh Cherukuri',
        description: 'Welcome to my personal portfolio!',
        type: 'website',
        images: ['/opengraph-image.png']
    },
    twitter: {
        card: 'summary_large_image',
        site: '@safetpojskic',
        title: 'Saketh Cherukuri',
        description: 'Welcome to my personal portfolio!',
        images: ['/opengraph-image.png']
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={spaceGrotesk.className}>
                <Analytics />
                <SpeedInsights />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
