import { setCurrentAccountAdapter } from './current-account-adapter'
import { mockAccountModel } from '@/domain/test'
import { LocalStorageAdapter } from '@/infra/cache/local-storage-adapter'

// it mocks all methods inside this component and sets them as dummies!!
jest.mock('@/infra/cache/local-storage-adapter')

describe('CurrentAccountAdapter', () => {
  test('Should call LocalStorageAdapter with correct values', () => {
    const account = mockAccountModel()

    // mocks calls to makeLocalStorageAdapter() => LocalStorageAdapter(), as well the 'set' method
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setCurrentAccountAdapter(account)
    expect(setSpy).toHaveBeenCalledWith('account', account)
    
    // since LocalStorageAdapter methods are now dummies, they can't set values to localStorage
    console.log(localStorage)
  })
})