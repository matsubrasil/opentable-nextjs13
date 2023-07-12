import { Metadata } from 'next'
import { Description } from '@/components/Description'
import { Gallery } from '@/components/Gallery'
import { Rating } from '@/components/Rating'
import { ReservationCard } from '@/components/ReservationCard'
import { Reviews } from '@/components/Reviews'
import { RestaurantNavBar, Title } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Milestone Grill (Toronto) | OpenTable',
  description:
    'restaurant reservations, online restaurant reservations, restaurant management software, opentable, open table',
}

export default function RestaurantDetailsPage() {
  return (
    <>
      <div className="w-[70%] rounded bg-white p-3 shadow">
        <RestaurantNavBar />
        <Title />
        <Rating />
        <Description />
        <Gallery />
        <Reviews />
      </div>
      <div className="relative w-[27%] text-reg">
        <ReservationCard />
      </div>
    </>
  )
}
