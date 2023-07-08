import { SearchRestaurantCard } from '@/components'
import { NavBar, SearchHeader, SearchSideBar } from '@/components/layout'

export default function SearchPage() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />
        <SearchHeader />

        <div className="m-auto flex w-2/3 items-start justify-between py-4">
          <SearchSideBar />
          <div className="w-5/6">
            <SearchRestaurantCard />
          </div>
        </div>
      </main>
    </main>
  )
}
