'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import React, { PropsWithChildren } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      // staleTime: 60 * 1000,
    },
  },
})
export const Provider = ({ children }: PropsWithChildren) => {

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration>
          {children}
        </ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}
