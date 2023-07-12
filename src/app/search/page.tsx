import { SearchHeader, SearchSideBar } from '@/components/layout'
import { SearchRestaurantCard } from '@/components'

export default function SearchPage() {
  return (
    <>
      <SearchHeader />
      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SearchSideBar />
        <div className="w-5/6">
          <SearchRestaurantCard />
        </div>
      </div>
    </>
  )
}
