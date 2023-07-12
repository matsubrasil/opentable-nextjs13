import { Metadata } from 'next'
import { SearchHeader, SearchSideBar } from '@/components/layout'
import { SearchRestaurantCard } from '@/components'

export const metadata: Metadata = {
  title: 'Search Restaurant OpenTable',
  description:
    'restaurant reservations, online restaurant reservations, restaurant management software, opentable, open table',
}

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
