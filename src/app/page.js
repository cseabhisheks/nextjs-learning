// 'use client'
export default function Home() {
    console.log("Running on server",process.env.NEXT_PUBLIC_ss);

    return (
        <>
            <h1>Welcome to Next.js</h1>
            <p>This is a Server Component.</p>
        </>
    );
}