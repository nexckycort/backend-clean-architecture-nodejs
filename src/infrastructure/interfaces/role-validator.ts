import { ROLE } from 'domain/models/user-model'

export interface RoleValidator {
  isValid: (role: ROLE) => boolean
}
