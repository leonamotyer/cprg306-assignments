"use client";
import { useRouter } from 'next/navigation';
import StudentInfo from "../week-2/student-info";
import ItemList from './item-list';

const style = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundImage: 'url(https://cdn.wallpapersafari.com/63/84/mJg9fA.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFD700', // Yellow text
    fontFamily: 'Arial, sans-serif',
    padding: '2rem 1rem',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '2rem',
    color: '#FFD700', // Yellow text
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds depth
    WebkitTextStroke: '2px black',
    textStroke: '2px black',
  },
  listContainer: {
    maxHeight: '60vh',
    overflowY: 'auto',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    padding: '1rem',
    borderRadius: '10px',
  },
  backButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#FFD700',
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
      <div style={style.listContainer}>
        <ItemList />
      </div>
      <button style={style.backButton} onClick={goBack}>Back</button>
    </main>
  );
}
