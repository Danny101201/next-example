'use server'
import { db } from "@/db"
import { cache } from "react"

export const getUsers = () => {
  return db.user.findMany({})
}