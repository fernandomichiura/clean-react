import { FieldValidation } from "@/validation/protocols/field-validation"
import { RequiredFieldValidation } from "@/validation/validators"

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  // This static forces ValidationBuilder instances to start from this method
  // ex.: ValidationBuilder.field('field_name')
  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}