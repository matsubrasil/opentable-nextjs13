import { Metadata } from 'next'
import { Description } from '@/components/Description'
import { Gallery } from '@/components/Gallery'
import { Rating } from '@/components/Rating'
import { ReservationCard } from '@/components/ReservationCard'
import { Reviews } from '@/components/Reviews'
import { RestaurantNavBar, Title } from '@/components/layout'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Milestone Grill (Toronto) | OpenTable',
  description:
    'restaurant reservations, online restaurant reservations, restaurant management software, opentable, open table',
}

type RestaurantType = {
  id: number
  name: string
  images: string[]
  description: string
  slug: string
}

const fetchRestaurantBySlug = async (slug: string): Promise<RestaurantType> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  })

  if (!restaurant) {
    throw new Error()
  }

  return restaurant
}

export default async function RestaurantDetailsPage({
  params,
}: {
  params: { slug: string }
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug)

  return (
    <>
      <div className="w-[70%] rounded bg-white p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <Gallery images={restaurant.images} />
        <Reviews />
      </div>
      <div className="relative w-[27%] text-reg">
        <ReservationCard />
      </div>
    </>
  )
}
