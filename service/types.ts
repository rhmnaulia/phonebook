export interface IContact {
  created_at: Date
  first_name: string
  id: number
  last_name: string
  phones: IPhone[]
}

export interface IPhone {
  number: string
}
