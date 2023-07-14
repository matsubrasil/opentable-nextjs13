interface DescriptionProps {
  description: string
}

export function Description({ description }: DescriptionProps) {
  return (
    <div className="mt-4">
      <p className="text-lg font-light">{description}</p>
    </div>
  )
}
