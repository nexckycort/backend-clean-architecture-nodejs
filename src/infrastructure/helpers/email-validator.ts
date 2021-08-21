import { EmailValidator } from 'infrastructure/interfaces/email-validation'
import { emailDomain } from 'app/config/environment'

export const emailValidator: EmailValidator = {
  isValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.includes(emailDomain)
  }
}
