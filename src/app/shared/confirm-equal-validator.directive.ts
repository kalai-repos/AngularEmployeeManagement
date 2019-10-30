import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {
  // @Input() appConfirmEqualValidator: string;
  validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
    // const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
    const password = passwordGroup.get('password');
    const Confirpassword = passwordGroup.get('confirmPassword');
    if (password && Confirpassword && password.value !== Confirpassword.value) {
      return { '[notEqual]': true };
    }

    return null;
  }

  constructor() { }

}
