import { Metadata } from 'next'
import { RestaurantNavBar } from '@/components/layout'
import { Menu } from '@/components/Menu'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Menu of Milestone Grill (Toronto) | OpenTable',
  description:
    'restaurant reservations, online restaurant reservations, restaurant management software, opentable, open table',
}
interface RestaurantMenuPageProps {
  params: { slug: string }
}

export interface RestaurantItem {
  id: number
  name: string
  price: string
  description: string
  restaurantId: number
}

const fetchRestaurantMenu = async (slug: string): Promise<RestaurantItem[]> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  })

  if (!restaurant) {
    throw new Error()
  }

  return restaurant.items
}

export default async function RestaurantMenuPage({
  params,
}: RestaurantMenuPageProps) {
  const menu = await fetchRestaurantMenu(params.slug)
  return (
    <div className="w-[100%] rounded bg-white p-3 shadow">
      <RestaurantNavBar slug={params.slug} />
      <Menu menu={menu} />
    </div>
  )
}
