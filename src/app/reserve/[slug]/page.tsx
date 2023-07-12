import { ReserveHeader } from '@/components/layout'
import { ReserveForm } from '@/components/ReserveForm'

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
