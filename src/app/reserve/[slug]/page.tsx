import { ReserveForm } from '@/components/ReserveForm'
import { NavBar, ReserveHeader } from '@/components/layout'

export default function ReservationPage() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />
        <div className="h-screen border-t">
          <div className="m-auto w-3/5 py-9">
            <ReserveHeader />
            <ReserveForm />
          </div>
        </div>
      </main>
    </main>
  )
}
