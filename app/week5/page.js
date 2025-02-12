"use client";
import { useRouter } from 'next/navigation';
import NewItem from './new-item';

export default function Page() {
  const router = useRouter();

  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-8"
      style={{ backgroundImage: 'url(https://cdn.wallpapersafari.com/63/84/mJg9fA.jpg)' }}
    >
      <h1
        className="text-4xl text-yellow-500 mb-8 text-center font-bold drop-shadow-lg"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', WebkitTextStroke: '1px black' }}
      >
        Week 5 - Add New Item
      </h1>

      <div className="w-full max-w-md">
        <NewItem />

        <button
          onClick={() => router.back()}
          className="w-full mt-6 py-2 px-4 bg-yellow-500/80 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all"
        >
          Back
        </button>
      </div>
    </main>
  );
}