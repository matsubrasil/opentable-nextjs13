import { Metadata } from 'next'
import { ReserveHeader } from '@/components/layout'
import { ReserveForm } from '@/components/ReserveForm'

export const metadata: Metadata = {
  title: 'Reserve at Milestone Grill (Toronto) | OpenTable',
  description:
    'restaurant reservations, online restaurant reservations, restaurant management software, opentable, open table',
}

export default function ReservationPage() {
  return (
    <>
      <div className="h-screen border-t">
        <div className="m-auto w-3/5 py-9">
          <ReserveHeader />
          <ReserveForm />
        </div>
      </div>
    </>
  )
}
