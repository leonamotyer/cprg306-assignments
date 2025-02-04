"use client";
import { useRouter } from 'next/navigation';
import StudentInfo from "../week-2/student-info";
import ItemList from './item-list';

// ... (keep your existing style object)

export default function Page() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <main style={style.container}>
      <h1 style={style.heading}>Shopping List</h1>
      <ItemList/>
      <newItem/>
      <button style={style.backButton} onClick={goBack}>Back</button>
    </main>
  );
}