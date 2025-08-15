type Props ={
  id: number
  label: string
}

export const FitlerItem = ({ id, label }:Props) => {
  return (
  <div className="flex gap-4 items-center">
    <input
      className="size-6"
      type="checkbox"
      id={`ck-${id}`}
    />
    <label htmlFor={`ck-${id}`} className="text-lg text-gray-500">{label}</label>
  </div>
)
}