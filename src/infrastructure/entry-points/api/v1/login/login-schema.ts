import { ValidatorEmail } from 'infrastructure/entry-points/api/middlewares/validator/validator'
import { emailValidator } from 'infrastructure/helpers'
import { Validator } from 'infrastructure/lib/validator'

export const schemaLogin = Validator.object().keys({
  email: ValidatorEmail(emailValidator).email().required(),
  password: Validator.string().min(6).max(30).required()
})
