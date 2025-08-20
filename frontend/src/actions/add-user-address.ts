"use server"

import type { Address } from "@/types/address"
import { data } from '@/data'

export const  addUserAddress = async(token: string, address: Address): Promise<Address[]> => {
  // TODO: req para dd novo endereço

  return data.addresses
}