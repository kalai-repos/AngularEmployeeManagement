import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appSelectorRequired]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SelectorRequiredDirective,
    multi: true
  }]
})
export class SelectorRequiredDirective implements Validator {
  @Input('appSelectorRequired') defaultValue: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === this.defaultValue ? { '[defaultSelected]': true } : null;
  }

  constructor() { }

}
