'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import NavBar from '@/components/NavBar'

export default function Home() {
  const router = useRouter()
  const [location, setLocation] = useState('')

  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />

        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="mt-10 text-center">
              <h1 className="mb-2 text-5xl font-bold text-white">
                Find your table for any occasion
              </h1>
              {/* SEARCH BAR */}
              <div className="m-auto flex justify-center py-3 text-left text-lg">
                <input
                  className="mr-3  w-[450px] rounded p-2"
                  type="text"
                  placeholder="State, city or town"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button
                  className="rounded bg-red-600 px-9 py-2 text-white"
                  onClick={() => {
                    if (location === 'banana') return
                    router.push('/search')
                  }}
                >
                  Let&apos;s go
                </button>
              </div>
              {/* SEARCH BAR */}
            </div>
          </div>
          {/* HEADER */} {/* CARDS */}
          <div className="mt-10 flex flex-wrap justify-center px-36 py-3">
            {/* CARD */}
            <div className="m-3 h-72 w-64 cursor-pointer overflow-hidden rounded border">
              <Link href="/restaurant/milestones-grill">
                <img
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
                  alt=""
                  className="h-36 w-full"
                />
                <div className="p-1">
                  <h3 className="mb-2 text-2xl font-bold">Milestones Grill</h3>
                  <div className="flex items-start">
                    <div className="mb-2 flex">*****</div>
                    <p className="ml-2">77 reviews</p>
                  </div>
                  <div className="flex text-reg font-light capitalize">
                    <p className=" mr-3">Mexican</p>
                    <p className="mr-3">$$$$</p>
                    <p>Toronto</p>
                  </div>
                  <p className="mt-1 text-sm font-bold">Booked 3 times today</p>
                </div>
              </Link>
            </div>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  )
}
