"use client";
import { useRouter } from 'next/navigation';
import ItemList from './item-list';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 40, 0.8)),
      url(https://cdn.wallpapersafari.com/63/84/mJg9fA.jpg)
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#00f7ff', // Cyan text
    fontFamily: "'Orbitron', sans-serif", // Cyberpunk-style font
    overflow: 'auto',
    padding: '2rem',
  },
  contentWrapper: {
    backgroundColor: 'rgba(0, 15, 30, 0.65)', // Dark blue tint
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(0, 247, 255, 0.3)',
    borderRadius: '15px',
    padding: '2rem',
    width: '90%',
    maxWidth: '800px',
    margin: '2rem 0',
    boxShadow: '0 0 30px rgba(0, 247, 255, 0.2)',
  },
  heading: {
    fontSize: '2.5rem',
    margin: '1rem 0',
    color: '#ff00ff', // Neon pink
    textShadow: `
      0 0 10px #ff00ff,
      0 0 20px #ff00ff,
      0 0 30px #ff00ff
    `,
    textAlign: 'center',
    letterSpacing: '3px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60%',
      height: '3px',
      background: 'linear-gradient(to right, transparent, #00f7ff, transparent)',
    },
  },
  backButton: {
    margin: '2rem 0',
    padding: '0.8rem 2rem',
    backgroundColor: 'transparent',
    color: '#00f7ff',
    fontSize: '1.2rem',
    border: '2px solid #00f7ff',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textShadow: '0 0 8px rgba(0, 247, 255, 0.5)',
    boxShadow: '0 0 15px rgba(0, 247, 255, 0.3)',
    ':hover': {
      backgroundColor: 'rgba(0, 247, 255, 0.1)',
      transform: 'scale(1.05)',
      boxShadow: '0 0 25px rgba(0, 247, 255, 0.5)',
    },
  },
};

export default function Page() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <main style={style.container}>
      <h1 style={style.heading}>SHOPPING LIST</h1>
      <div style={style.contentWrapper}>
        <ItemList />
      </div>
      <button style={style.backButton} onClick={goBack}>
        ⬅ BACK
      </button >
    </main>
  );
}