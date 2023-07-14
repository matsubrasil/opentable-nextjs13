import { ReactNode } from 'react'
import { RestaurantHeader } from '@/components/layout'

interface RestaurantLayoutProps {
  children: ReactNode
  params: { slug: string }
}

export default function RestaurantLayout({
  children,
  params,
}: RestaurantLayoutProps) {
  return (
    <main>
      <RestaurantHeader name={params.slug} />
      <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
        {children}
      </div>
    </main>
  )
}
