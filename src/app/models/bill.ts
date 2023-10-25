import { Debtor } from "./debtor";

export interface Bill {
  amount: number,
  debtors: Debtor[]
}
