export interface Customer {
  name: string,
  membership_type: string,
  password: string,
  age: string,
  [selected_insurances: number]: string,
}