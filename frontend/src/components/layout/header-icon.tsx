import Image from "next/image"

type Props = {
  src: string
  alt: string
}

export const HeaderIcon = ({ src, alt }: Props) => {
  return (    
      <div className="size-12 border-gray-200 border rounded-sm flex justify-center items-center">
        <Image
          src={src}
          alt={alt}
          width={24}
          height={24}
          className="size-6"
        />
      </div>
  )
}