import { RoleValidator } from 'infrastructure/interfaces/role-validator'
import { ROLE, ROLES } from 'domain/models/user-model'

export const roleValidator: RoleValidator = {
  isValid(role: ROLE): boolean {
    return ROLES.includes(role)
  }
}
