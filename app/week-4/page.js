"use client";
import { useRouter } from 'next/navigation'; // Correct import for App Router
import StudentInfo from "../week-2/student-info";

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url(https://cdn.wallpapersafari.com/63/84/mJg9fA.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFD700', // Yellow text
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '2rem',
    color: '#FFD700', // Yellow text
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds depth
    WebkitTextStroke: '2px black', // Black outline
    textStroke: '2px black', // Black outline for supported browsers
  },
  backButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background
    color: '#FFD700', // Yellow text
    fontSize: '1.2rem',
    border: '2px solid #FFD700',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default function Page() {
  const router = useRouter(); // Get the Next.js router from next/navigation

  const goBack = () => {
    router.back(); // Navigate back to the previous page
  };

  return (
    <main style={style.container}>
      <h1 style={style.heading}>Shopping List</h1>
      <StudentInfo />
      <button style={style.backButton} onClick={goBack}>Back</button> {/* Back button */}
    </main>
  );
}
