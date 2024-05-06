// abstract class TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string
//     ) {
//     }
//     abstract getSepia(): void;
//     createAReel(length: number): number {
//         return length;
//     }
// }

// class Instagram extends TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ) {
//         super(cameraMode, filter);
//     }

//     getSepia(): void {
//         console.log("getSepia");
//     }

//     createAReel(length: number): number {
//         return length + this.burst;
//     }
// }

// const instagram = new Instagram("43", "443", 1);

// instagram.createAReel(32);


interface Validator {
    validate(input: string): boolean;
}

class RequiredValidator implements Validator {

    constructor(
        private target: Validator | null = null
    ) { }

    validate(input: string): boolean {
        const isValid = input.length > 0;
        if (isValid && this.target) {
            return this.target.validate(input);
        }
        return isValid;
    }
}

class EmailValidator implements Validator {
    constructor(
        private target: Validator | null = null
    ) { }

    validate(input: string): boolean {
        const isValid = input.includes("@");
        if (isValid && this.target) {
            return this.target.validate(input);
        }
        return isValid;
    }
}

const requiredValidator = new RequiredValidator(new EmailValidator());

console.log(requiredValidator.validate("pra@gmail.com"));
