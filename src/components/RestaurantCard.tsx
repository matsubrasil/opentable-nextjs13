import Link from 'next/link'
import { RestaurantCardType } from '@/app/page'
import { Price } from '@/components/Price'
interface RestaurantCardProps {
  restaurant: RestaurantCardType
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="m-3 h-72 w-64 cursor-pointer overflow-hidden rounded border">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img src={restaurant.mainImage} alt="" className="h-36 w-full" />
        <div className="p-1">
          <h3 className="mb-2 text-2xl font-bold">{restaurant.name}</h3>
          <div className="flex items-start">
            <div className="mb-2 flex">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{restaurant.cuisine.name}</p>
            <p className="mr-3">
              <Price categoryPrice={restaurant.categoryPrice} />
            </p>
            <p>{restaurant.location.name}</p>
          </div>
          <p className="mt-1 text-sm font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  )
}
