export interface Auth {
  user: User
  token: string
}

interface User {
  name: string
  email: string
}
