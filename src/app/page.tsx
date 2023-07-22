import { Header } from '@/components/layout'
import { RestaurantCard } from '@/components'
import { prisma } from '@/lib/prisma'
import { Cuisine, Location, PRICE } from '@prisma/client'

export type RestaurantCardType = {
  id: number
  name: string
  mainImage: string
  cuisine: Cuisine
  location: Location
  slug: string
  categoryPrice: PRICE
}

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      mainImage: true,
      cuisine: true,
      location: true,
      slug: true,
      categoryPrice: true,
    },
  })
  return restaurants
}

export default async function Home() {
  const restaurants = await fetchRestaurants()
  // console.log({ restaurants })
  return (
    <main>
      <Header />
      <div className="mt-10 flex flex-wrap justify-center px-36 py-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  )
}
