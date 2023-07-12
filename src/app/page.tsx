import { Header } from '@/components/layout'
import { RestaurantCard } from '@/components'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mt-10 flex flex-wrap justify-center px-36 py-3">
        <RestaurantCard />
      </div>
    </main>
  )
}
