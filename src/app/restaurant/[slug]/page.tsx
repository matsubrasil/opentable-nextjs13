import { Description } from '@/components/Description'
import { Gallery } from '@/components/Gallery'
import { Rating } from '@/components/Rating'
import { ReservationCard } from '@/components/ReservationCard'
import { Reviews } from '@/components/Reviews'
import {
  NavBar,
  RestaurantHeader,
  RestaurantNavBar,
  Title,
} from '@/components/layout'

export default function RestaurantDetailsPage() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />
        <RestaurantHeader />

        <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
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
        </div>
      </main>
    </main>
  )
}
