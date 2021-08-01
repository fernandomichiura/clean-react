import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from "@/validation/validators"
import { ValidationBuilder as sut } from "./validation-builder"

describe('ValidationBuilder', () => {
  test('Shpuld return RequiredFieldValidation', () => {
    const validations = sut.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Shpuld return EmailValidation', () => {
    const validations = sut.field('any_field').email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })

  test('Shpuld return MinLengthValidation', () => {
    const validations = sut.field('any_field').min(5).build()
    expect(validations).toEqual([new MinLengthValidation('any_field', 5)])
  })
})
