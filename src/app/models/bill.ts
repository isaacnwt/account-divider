import { Debtor } from "./debtor";

export interface Bill {
  title: string,
  amount: number,
  debtors: Debtor[]
}
