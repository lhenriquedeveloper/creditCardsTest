import { Cards } from "./ICards";

export interface Client {
  id: number;
  name: string;
  surname: string;
  email: string;
  address: string;
  phone: string;
  cards: Cards[];
}
