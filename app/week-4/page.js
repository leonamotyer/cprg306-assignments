"use client";
import { useRouter } from 'next/navigation';
import ItemList from '../week-3/item-list';

const pageStyle = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(https://cdn.wallpapersafari.com/63/84/mJg9fA.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '2rem',
    color: '#FFD700',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '3rem',
    margin: '2rem 0',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    WebkitTextStroke: '2px black',
  },
  contentWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '10px',
    padding: '2rem',
    width: '80%',
    maxWidth: '800px',
  },
  backButton: {
    marginTop: '2rem',
    padding: '0.8rem 1.5rem',
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
  const router = useRouter();

  return (
    <main style={pageStyle.container}>
      <h1 style={pageStyle.heading}>Shopping List</h1>
      <div style={pageStyle.contentWrapper}>
        <ItemList />
        <button 
          style={pageStyle.backButton} 
          onClick={() => router.back()}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#FFD700';
            e.target.style.color = 'black';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            e.target.style.color = '#FFD700';
          }}
        >
          Back
        </button>
      </div>
    </main>
  );
}