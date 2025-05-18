import Link from 'next/link';
import { Navbar } from '@/components/page-ui/Navbar';
import { BackgroundBeams } from '@/components/ui/background-beams';

const posts = [
    {
        title: 'My First Article',
        summary: 'A short summary of my first article.',
        date: '2024-05-18',
        // url: 'https://external-link.com' // Optional: add if you want to link externally
    },
    // Add more articles here
];

export default function ArticlesPage() {
    return (
        <div className="relative min-h-screen w-full bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
            <Navbar />
            <BackgroundBeams />
            <div className="relative z-10 mx-auto max-w-3xl px-6 py-24">
                <h1 className="text-4xl font-bold mb-8 dark:text-white">Articles</h1>
                <ul className="space-y-8">
                    {posts.map((post, idx) => (
                        <li key={idx} className="border-b pb-4">
                            {/* If you want to link externally, use <a href={post.url}> */}
                            <span className="text-2xl font-semibold text-blue-600">{post.title}</span>
                            <div className="text-sm text-gray-500">{post.date}</div>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{post.summary}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}