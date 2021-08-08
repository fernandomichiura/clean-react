export class EmailInUseError extends Error {
  constructor () {
    super('Esse e-mail está em uso')
    this.name = 'EmailInUseError'
  }
}
