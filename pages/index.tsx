import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-5 px-3 py-5">
        <h1>Skill test Frontend - Putut Nardianto L</h1>
        <Link
          href="/fetchData"
          className="text-center shadow rounded-lg p-3 btn-secondary w-full"
        >
          Fetching data menggunakan RTK Query dan Pagination
        </Link>
        <Link
          href="/inputform"
          className="text-center shadow rounded-lg p-3 btn-secondary w-full"
        >
          Form input todo
        </Link>
        <Link
          href="/halamanssr"
          className="text-center shadow rounded-lg p-3 btn-secondary w-full"
        >
          Render halaman todo menggunakan strategy SSR
        </Link>
                <Link
          href="/halamanisr"
          className="text-center shadow rounded-lg p-3 btn-secondary w-full"
        >
          Render halaman todo menggunakan strategy ISR
        </Link>

      </main>
    </>
  );
}
