export class ClientEntity {
  constructor(
    public readonly name: string,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
    public readonly id?: string,
  ) {}
}
