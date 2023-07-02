import { NavBar, Header } from '@/components/layout'
import { RestaurantCard } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />
        <main>
          <Header />
          <div className="mt-10 flex flex-wrap justify-center px-36 py-3">
            <RestaurantCard />
          </div>
        </main>
      </main>
    </main>
  )
}
