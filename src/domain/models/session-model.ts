export class Session {
  _id!: string
  constructor(readonly user_id: string, readonly token: string, public expired: Date) {}
}

export interface NewSession {
  userId: string
  token: string
}
