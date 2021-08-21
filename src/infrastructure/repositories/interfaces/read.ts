export interface Read<T> {
  find: (item: any) => Promise<T[]>
  findByPk: (id: string) => Promise<T>
  findOne: (item: any) => Promise<T>
}
