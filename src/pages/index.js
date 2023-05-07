import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Home() {
  // checking if the user exists
  const router = useRouter();

  useEffect(()=>{
    if(!localStorage.getItem('user')){
      router.push('/login');
    }
  }, [])

  return (
    <>
      <h1>hello world</h1>
    </>
  )
}
