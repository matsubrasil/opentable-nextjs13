import { PRICE } from '@prisma/client'
import Link from 'next/link'

interface location {
  id: number
  name: string
}
interface cuisine {
  id: number
  name: string
}
interface SearchSideBarProps {
  locations: location[]
  cuisines: cuisine[]
  searchParams: {
    city?: string
    cuisine?: string
    price?: PRICE
  }
}

/**
 *
 * @param locations, cuisines
 * @returns
 */
export async function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: SearchSideBarProps) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: '$',
      className: 'border w-full text-reg text-center font-light rounded-l p-2',
    },
    {
      price: PRICE.REGULAR,
      label: '$$',
      className: 'border w-full text-reg text-center  font-light p-2',
    },
    {
      price: PRICE.EXPENSIVE,
      label: '$$$',
      className: 'border w-full text-reg font-light text-center rounded-r p-2',
    },
  ]
  return (
    <div className="w-1/5">
      <div className="flex flex-col border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: '/search',
              query: { ...searchParams, city: location.name },
            }}
            key={location.name}
            className="text-reg font-light capitalize"
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 flex flex-col border-b pb-4">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: '/search',
              query: { ...searchParams, cuisine: cuisine.name },
            }}
            key={cuisine.name}
            className="text-reg font-light capitalize"
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map((categoryPrice) => (
            <Link
              key={categoryPrice.price}
              href={{
                pathname: '/search',
                query: { ...searchParams, price: categoryPrice.price },
              }}
              className={categoryPrice.className}
            >
              {categoryPrice.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
