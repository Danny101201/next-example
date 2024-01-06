'use client'
import { getUsers } from '@/action/user'
import { User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { queryClient } from './Provider'
export const Users = () => {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })
  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}
