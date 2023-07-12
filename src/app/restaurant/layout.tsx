import { ReactNode } from 'react'
import { RestaurantHeader } from '@/components/layout'

export default function RestaurantLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <main>
      <RestaurantHeader />
      <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
        {children}
      </div>
    </main>
  )
}
