export interface Cryptography {
  encrypt: (value: string) => Promise<string>
  decrypt: (value: string, compary: string, saltText: string) => Promise<Boolean>
}
