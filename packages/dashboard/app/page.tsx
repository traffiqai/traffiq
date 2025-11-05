'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center h-screen bg-neutral-950 text-white">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Traffiq Dashboard</h1>
          <p className="text-neutral-400 text-lg">
            Welcome to your traffic analytics platform
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => router.push('/sign-up')}
            className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push('/sign-in')}
            className="border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-neutral-800 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
}
