import { RestaurantItem } from '@/app/restaurant/[slug]/menu/page'
import { MenuCard } from '@/components/MenuCard'

interface MenuProps {
  menu: RestaurantItem[]
}

export function Menu({ menu }: MenuProps) {
  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="mb-1 mt-4 pb-1">
          <h1 className="text-4xl font-bold">Menu</h1>
        </div>
        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {menu.map((itemMenu) => (
              <MenuCard key={itemMenu.id} item={itemMenu} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>This restaurant does not have a menu</p>
          </div>
        )}
      </div>
    </main>
  )
}
