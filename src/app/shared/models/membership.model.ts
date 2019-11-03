export class Membership {
  level: number
  title: string

  constructor(obj: object) {
    Object.assign(this, obj)
  }
}