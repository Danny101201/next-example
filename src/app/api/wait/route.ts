import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const wait = Number(searchParams.get('wait'))
  await new Promise(r => setTimeout(r, wait))

  return NextResponse.json(`waited ${wait}ms ` + Date.now())
}
