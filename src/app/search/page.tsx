import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { Location, Cuisine, PRICE } from '@prisma/client'
import { SearchHeader, SearchSideBar } from '@/components/layout'
import { SearchRestaurantCard } from '@/components'

export const metadata: Metadata = {
  title: 'Search Restaurant OpenTable',
  description:
    'restaurant reservations, online restaurant reservations, restaurant management software, opentable, open table',
}
interface SearchPageProps {
  searchParams: {
    city?: string
    cuisine?: string
    price?: PRICE
  }
}

export interface RestaurantInfoPage {
  id: number
  name: string
  mainImage: string
  location: Location
  cuisine: Cuisine
  categoryPrice: PRICE
  slug: string
}

/***
 * @name: fetchSearchRestaurantByCity
 * @description: pesquisa os restaurantes de um local, mas se não passar nenhum parâmetro, a pesquisa retorna todos os restaurantes
 */

async function fetchSearchRestaurantByCity({
  city,
}: {
  city: string | undefined
}): Promise<RestaurantInfoPage[]> {
  const select = {
    id: true,
    name: true,
    mainImage: true,
    location: true,
    cuisine: true,
    categoryPrice: true,
    slug: true,
  }

  if (!city) {
    return prisma.restaurant.findMany({
      select,
      orderBy: [
        {
          location: {
            name: 'asc',
          },
        },
        {
          name: 'asc',
        },
      ],
    })
  }
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLocaleLowerCase(),
        },
      },
    },
    select,
  })
}

/***
 * @name: fetchLocations
 * @description: pesquisa as localidades dos restaurantes
 *
 */
const fetchLocations = async () => {
  return await prisma.location.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: 'asc',
    },
  })
}
/***
 * @name: fetchCuisines
 * @description: pesquisa os restaurantes especializados em um tipo de cuisine
 *
 */
const fetchCuisines = async () => {
  return await prisma.cuisine.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: 'asc',
    },
  })
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const restaurants = await fetchSearchRestaurantByCity({
    city: searchParams.city,
  })

  const locations = await fetchLocations()
  const cuisines = await fetchCuisines()

  console.log('searchParams', searchParams)
  return (
    <>
      <SearchHeader />
      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <SearchRestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))}
            </>
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  )
}
