import { RestaurantHeader, RestaurantNavBar } from '@/components/layout'
import { Menu } from '@/components/Menu'

export default function RestaurantMenuPage() {
  return (
    <>
      <RestaurantHeader />
      <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
        <div className="w-[100%] rounded bg-white p-3 shadow">
          <RestaurantNavBar />
          <Menu />
        </div>
      </div>
    </>
  )
}
