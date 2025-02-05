"use client";
import { useRouter } from 'next/navigation'; // Correct import for App Router
import StudentInfo from "../week-2/student-info";
import ItemList from './item-list';

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
    marginTop: '2rem',
    color: '#FFD700', // Yellow text
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds depth
    WebkitTextStroke: '2px black', // Black outline
    textStroke: '2px black', // Black outline for supported browsers
    position: 'relative',
  },
};