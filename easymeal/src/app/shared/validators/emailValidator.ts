import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains: string[]): ValidatorFn {
    //const domainStrings = domains.join("|"); // ['bg', 'com'] => bg|com
    const regExp = new RegExp(`^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`);

    return (control) => {
        const x = control.value;
        const z = regExp.test(control.value);
        return control.value === "" || regExp.test(control.value)
            ? null
            : { appEmailValidator: true };
    };
}
//   regexp /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/