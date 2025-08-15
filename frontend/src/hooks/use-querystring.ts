import { usePathname, useSearchParams, useRouter } from "next/navigation"

export const useQueryString = () => {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  
  return{
    get: (att: string) => {
      return searchParams.get(att)
    },

    set: (att: string, val: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if(val) {
        params.set(att, val)
      } else {
        params.delete(att)
      }
      router.push(`${pathName}?${params.toString()}`)
    }

  }
}