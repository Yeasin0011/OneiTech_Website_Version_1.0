"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Your content can go here */}
    </main>
  );
}
