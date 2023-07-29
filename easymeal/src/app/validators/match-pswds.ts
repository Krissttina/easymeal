import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(
    passValue: string, rePassValue: string
    ): ValidatorFn{
    return (control)=>{
        const group = control as FormGroup;
        const pass1 = group.get(passValue);
        const pass2 = group.get(rePassValue);
        //
        return pass1?.value === pass2?.value
        ? null
        : { matchPasswordsValidator: true };
    }
}