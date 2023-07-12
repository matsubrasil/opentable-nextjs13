import { RestaurantNavBar } from '@/components/layout'
import { Menu } from '@/components/Menu'

export default function RestaurantMenuPage() {
  return (
    <div className="w-[100%] rounded bg-white p-3 shadow">
      <RestaurantNavBar />
      <Menu />
    </div>
  )
}
