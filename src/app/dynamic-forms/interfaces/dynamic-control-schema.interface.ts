export interface DynamicControlSchema {
    type?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    classes?: any;
    style?: any;
    validate?: {
        required?: boolean;
        min?: Number;
        max?: Number;
        minLength?: Number;
        maxLength?: Number;
    };
    properties?: any;
}
