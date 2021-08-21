import { Request, Response, NextFunction } from 'express'
import { Validator, ObjectSchema, StringSchema } from 'infrastructure/lib/validator'

import { BadRequestError } from 'infrastructure/entry-points/api/helpers/error-handler'
import { RoleValidator } from 'infrastructure/interfaces/role-validator'
import { ROLE } from 'domain/models/user-model'
import { EmailValidator } from 'infrastructure/interfaces/email-validation'

export enum ValidationSource {
  BODY = 'body',
  HEADER = 'headers',
  QUERY = 'query',
  PARAM = 'params'
}

export const ValidatorRole = (roleValidator: RoleValidator): StringSchema =>
  Validator.string().custom((value: ROLE, helpers) => {
    if (roleValidator.isValid(value)) return value
    return helpers.error('any.invalid')
  }, 'Role Validation')

export const ValidatorEmail = (emailValidator: EmailValidator): StringSchema =>
  Validator.string().custom((value: string, helpers) => {
    if (emailValidator.isValid(value)) return value
    return helpers.error('any.invalid')
  }, 'Email Validation')

export const JoiAuthBearer = (): StringSchema =>
  Validator.string().custom((value: string, helpers) => {
    if (!value.startsWith('Bearer ')) return helpers.error('any.invalid')
    if (value.split(' ')[1] === '') return helpers.error('any.invalid')
    return value
  }, 'Authorization Header Validation')

export default (schema: ObjectSchema, source: ValidationSource = ValidationSource.BODY) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[source])

    if (error === undefined) return next()

    const { details } = error
    const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',')

    return BadRequestError(res, message)
  }
