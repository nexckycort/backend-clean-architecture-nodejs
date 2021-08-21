import { ValidatorEmail, ValidatorRole } from 'infrastructure/entry-points/api/middlewares/validator/validator'
import { emailValidator, roleValidator } from 'infrastructure/helpers'
import { Validator } from 'infrastructure/lib/validator'

export const schemaSignup = Validator.object().keys({
  name: Validator.string().alphanum().min(3).max(60).required(),
  password: Validator.string().min(6).max(30).required(),
  email: ValidatorEmail(emailValidator).email().required(),
  role: ValidatorRole(roleValidator).required()
})
