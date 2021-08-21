export class User {
  public _id!: string
  constructor(readonly name: string, readonly password: string, readonly email: string, readonly role: string, readonly salt: string) {}
}

export interface NewUser {
  name: string
  email: string
  password: string
  role: ROLE
}

export enum ROLE {
  ADMIN = 'admin',
  EMPLOYEE = 'employee'
}

export const ROLES = [ROLE.ADMIN, ROLE.EMPLOYEE]
