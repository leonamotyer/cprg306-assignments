"use client";
import { useRouter } from 'next/navigation';
import NewItem from './new-item';

export default function Page() {
  //const router = useRouter();

  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-8"
      style={{ backgroundImage: 'url(https://cdn.wallpapersafari.com/63/84/mJg9fA.jpg)' }}
    >
      

      <div className="w-full max-w-md">
       Hello
      </div>
    </main>
  );
}