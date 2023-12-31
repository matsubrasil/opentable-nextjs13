import { RestaurantItem } from '@/app/restaurant/[slug]/menu/page'

interface MenuCardProps {
  item: RestaurantItem
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <div className=" mb-3 w-[49%] rounded border bg-gray-200 p-3">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="mt-1 text-sm font-light">{item.description}</p>
      <p className="mt-7">${item.price}</p>
    </div>
  )
}
