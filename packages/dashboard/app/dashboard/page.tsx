'use client';

import { useRouter } from 'next/navigation';
import { useSession, signOut } from '../lib/auth-client';
import { useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push('/sign-in');
    }
  }, [isPending, session, router]);

  if (isPending)
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-950">
        <p className="text-center text-white">Loading...</p>
      </div>
    );

  if (!session?.user)
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-950">
        <p className="text-center text-white">Redirecting...</p>
      </div>
    );

  const { user } = session;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={() => signOut()}
            className="bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
          >
            Sign Out
          </button>
        </div>

        <div className="bg-neutral-900 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Welcome back!</h2>
          <div className="space-y-2">
            <p>
              <span className="text-neutral-400">Name:</span>{' '}
              {user.name || 'Not provided'}
            </p>
            <p>
              <span className="text-neutral-400">Email:</span> {user.email}
            </p>
            <p>
              <span className="text-neutral-400">User ID:</span> {user.id}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-900 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-neutral-400">View your traffic analytics</p>
          </div>

          <div className="bg-neutral-900 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p className="text-neutral-400">Manage your account settings</p>
          </div>

          <div className="bg-neutral-900 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Reports</h3>
            <p className="text-neutral-400">Generate traffic reports</p>
          </div>
        </div>
      </div>
    </main>
  );
}
