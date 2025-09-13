'use client' // 客户端组件（需调用useState等React hooks）
import ShowBookList from "@/components/ShowBookList";

export default function Home() {
  return <main><ShowBookList /></main>;
}