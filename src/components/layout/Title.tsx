interface TitleProps {
  name: string
}

export function Title({ name }: TitleProps) {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-6xl font-bold">{name}</h1>
    </div>
  )
}
