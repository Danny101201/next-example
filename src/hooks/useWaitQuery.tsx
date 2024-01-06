'use client'

import { useSuspenseQuery } from "@tanstack/react-query"
function getBaseURL() {
  if (typeof window !== 'undefined') {
    return ''
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}
const baseUrl = getBaseURL()
export const useWaitQuery = (wait: number) => {
  return useSuspenseQuery({
    queryKey: ['wait', wait],
    queryFn: async () => {
      const url = baseUrl + `/api/wait?wait=${wait}`
      const res = await fetch(url).then(res => res.json())
      return res
    }
  })
}