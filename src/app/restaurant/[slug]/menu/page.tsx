import { Metadata } from 'next'
import { RestaurantNavBar } from '@/components/layout'
import { Menu } from '@/components/Menu'

export const metadata: Metadata = {
  title: 'Menu of Milestone Grill (Toronto) | OpenTable',
  description:
    'restaurant reservations, online restaurant reservations, restaurant management software, opentable, open table',
}

export default function RestaurantMenuPage() {
  return (
    <div className="w-[100%] rounded bg-white p-3 shadow">
      <RestaurantNavBar />
      <Menu />
    </div>
  )
}
