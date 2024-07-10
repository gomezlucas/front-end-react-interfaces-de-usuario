 
"use client";
import { useRouter } from 'next/navigation'


export default function Page() {
  const router = useRouter();
   router.push('/login');
  return <h1>Hello, Next.js!</h1>
}