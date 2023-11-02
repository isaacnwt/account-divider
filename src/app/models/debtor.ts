import { User } from "./user"

export class Debtor {
  email: string
  name: string
  debtValue!: number

  constructor(email: string, name: string) {
    this.email = email
    this.name = name
  }

  public static of(user: User) {
    return new Debtor(user.email, user.firstName);
  }
}
