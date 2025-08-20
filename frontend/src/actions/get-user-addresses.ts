"use server"

import type { Address } from "@/types/address"
import { data } from '@/data'

export const getUserAddresses = async (token: string): Promise<Address[]> => {
  // TODO: pegar endereço do user pelo token

  return data.addresses
}