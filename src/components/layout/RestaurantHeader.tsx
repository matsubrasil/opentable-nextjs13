interface RestaurantHeaderProps {
  name: string
}

export function RestaurantHeader({ name }: RestaurantHeaderProps) {
  const renderTitle = () => {
    const nameArray = name.split('-')
    const lastNamePosition = nameArray.length - 1
    nameArray[lastNamePosition] = `(${nameArray[lastNamePosition]})`
    return nameArray.join(' ')
  }

  return (
    <div className="h-96 overflow-hidden">
      <div className="flex h-full items-center justify-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center">
        <h1 className="text-shadow text-center text-7xl capitalize text-white">
          {renderTitle()}
        </h1>
      </div>
    </div>
  )
}
