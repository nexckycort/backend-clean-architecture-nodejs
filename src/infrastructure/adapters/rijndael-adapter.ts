import crypto from 'crypto'

import { Cryptography } from 'infrastructure/interfaces/encryper'
import { Rijndael } from 'infrastructure/lib/rijndael'

export class RijndaelAdapter implements Cryptography {
  private readonly key: string
  private readonly salt: number
  saltText!: string
  private saltBytes!: Buffer

  constructor(salt: number, key: string) {
    this.key = key
    this.salt = salt
  }

  encrypt = async (value: string): Promise<string> => {
    this.saltBytes = crypto.randomBytes(this.salt)
    this.saltText = this.saltBytes.toString('base64')
    const hash = Rijndael(this.saltBytes, this.key, value)
    return hash
  }

  decrypt = async (value: string, compareSync: string, saltText: string): Promise<Boolean> => {
    this.saltBytes = Buffer.from(saltText, 'base64')
    const hash = Rijndael(this.saltBytes, this.key, value)
    const comparyHash = hash === compareSync
    return comparyHash
  }
}
