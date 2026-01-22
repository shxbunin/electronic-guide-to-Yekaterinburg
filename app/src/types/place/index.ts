import type { TProperty } from '@/types/property'

export type TPlace = {
  id: string
  title: string
  images: string[]
  properties: TProperty[]
  address: string
}