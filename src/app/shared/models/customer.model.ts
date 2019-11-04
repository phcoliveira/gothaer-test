export class Customer {
  name: string
  membership_type: string
  password: string
  age: string
  selected_insurances: string[]

  constructor(obj: object) {
    Object.assign(this, obj)
  }
}