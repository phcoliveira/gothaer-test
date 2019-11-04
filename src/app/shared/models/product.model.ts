export interface Price {
  currency: string,
  label: string,
  maxAge: number,
  minAge: number,
  price: string,
}

export class Product {
  availability: string
  level: number
  type: string
  title: string
  prices: Price[]

  constructor(obj: object) {
    Object.assign(this, obj)
  }
}