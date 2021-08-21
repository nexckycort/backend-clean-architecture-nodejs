import jwt from 'jsonwebtoken'

import { AuthenticationToken } from 'infrastructure/interfaces/jwt-token'

export class JwtAdapter implements AuthenticationToken {
  constructor(private readonly seed: string) {
    this.seed = seed
  }

  async token(value: string): Promise<string> {
    const token = jwt.sign(
      {
        value
      },
      this.seed
    )
    return token
  }

  /* decodeToken(token: string): any {
    return jwt.decode(token)
  },

  verifyToken(token: string): any {
    const { secretKey } = config.jwt
    return jwt.verify(token, secretKey)
  },

  try {
    const authHeader = req.get('Authorization') as string

    const [, token] = authHeader.split(' ')
    req.user = AccessService.verifyToken(token)
    next()
  } catch (error) {
    if (String(error).includes('invalid token') || String(error).includes('invalid signature')) return AuthFailureError(res, 'Token is not valid')
    if (String(error).includes('jwt expired')) return AuthFailureError(res, 'Token is expired')
    Logger.error(error)
    return AuthFailureError(res)
  }
  */
}
