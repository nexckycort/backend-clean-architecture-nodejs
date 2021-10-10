export interface Write<T> {
  create: (item: T) => Promise<T>
  update: (filter: any, item: T) => Promise<T>
  delete: (filter: any) => Promise<boolean>
}
