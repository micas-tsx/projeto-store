type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params
  const filters = await searchParams
  
  // TODO: pegar as informações da catregoria

  return (
    <div className="">
      slug: {slug}
    </div>
  )
}