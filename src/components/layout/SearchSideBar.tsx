interface location {
  id: number
  name: string
}
interface cuisine {
  id: number
  name: string
}
interface SearchSideBarProps {
  locations: location[]
  cuisines: cuisine[]
}

export async function SearchSideBar({
  locations,
  cuisines,
}: SearchSideBarProps) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <p key={location.name} className="text-reg font-light capitalize">
            {location.name}
          </p>
        ))}
      </div>
      <div className="mt-3 border-b pb-4">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <p key={cuisine.name} className="text-reg font-light capitalize">
            {cuisine.name}
          </p>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="w-full rounded-l border p-1 text-sm font-light">
            $
          </button>
          <button className="w-full border-b border-r border-t p-1 text-sm font-light">
            $$
          </button>
          <button className="w-full rounded-r border-b border-r border-t p-1 text-sm font-light">
            $$$
          </button>
        </div>
      </div>
    </div>
  )
}
