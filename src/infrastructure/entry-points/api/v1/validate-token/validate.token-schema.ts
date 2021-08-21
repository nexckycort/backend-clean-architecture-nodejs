import { JoiAuthBearer } from 'infrastructure/entry-points/api/middlewares/validator/validator'
import { Validator } from 'infrastructure/lib/validator'

export const schemaValidateToken = Validator.object()
  .keys({
    authorization: JoiAuthBearer().required()
  })
  .unknown(true)
