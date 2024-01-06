'use client'
import { useWaitQuery } from '@/hooks/useWaitQuery'
import React from 'react'
interface WaitComponentProp {
  wait: number
}
export const WaitComponent = ({ wait }: WaitComponentProp) => {
  const { data } = useWaitQuery(wait)
  return (
    <div>result: {data}</div>
  )
}
