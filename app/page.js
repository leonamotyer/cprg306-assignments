"use client";
import './globals.css';  // Import global styles

const styles = {
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
    color: '#FFD700',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds depth
    WebkitTextStroke: '2px black', // Black outline
    textStroke: '2px black', // Black outline for supported browsers
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  linkItem: {
    margin: '1rem 0',
  },
  link: {
    textDecoration: 'none',
    fontSize: '1.5rem',
    color: '#FFD700',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background
    padding: '0.5rem 1rem',
    border: '2px solid #FFD700',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>CPRG 306: Web Dev - Assignments</h1>
      <ul style={styles.linkList}>
        <li style={styles.linkItem}>
          <a href="/week-2" style={styles.link}>Week 2</a>
        </li>
        <li style={styles.linkItem}>
          <a href="/week-3" style={styles.link}>Week 3</a>
        </li>
        <li style={styles.linkItem}>
          <a href="/week-4" style={styles.link}>Week 4</a>
        </li>
        <li style={styles.linkItem}>
          <a href="/week-5" style={styles.link}>Week-5</a>
        </li>
        <li style={styles.linkItem}>
          <a href="/week-5 " style={styles.link}>Week 6</a>
        </li>
        <li style={styles.linkItem}>
          <a href="/week-7" style={styles.link}>Week 7</a>
        </li>
        <li style={styles.linkItem}>
          <a href="/week-8" style={styles.link}>Week 8</a>
        </li>
      </ul>
    </div>
  );
}
