import { PRICE } from '@prisma/client'

interface PriceProps {
  categoryPrice: PRICE
}

export function Price({ categoryPrice }: PriceProps) {
  const renderPrice = () => {
    switch (categoryPrice) {
      case 'CHEAP':
        return (
          <>
            <span>$$</span>
            <span className="text-gray-400">$$</span>
          </>
        )
      case 'REGULAR':
        return (
          <>
            <span>$$$</span>
            <span className="text-gray-400">$</span>
          </>
        )
      case 'EXPENSIVE':
        return (
          <>
            <span>$$$$</span>
          </>
        )
      default:
        return (
          <>
            <span>$</span>
            <span className="text-gray-400">$$$</span>
          </>
        )
    }
  }
  return <div className="flex">{renderPrice()}</div>
}
