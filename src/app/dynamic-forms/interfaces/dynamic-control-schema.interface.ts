export interface DynamicControlSchema {
    type?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    classes?: any;
    style?: any;
    inline?: boolean;
    validate?: {
        required?: boolean;
        min?: Number;
        max?: Number;
        minLength?: Number;
        maxLength?: Number;
        between?: {
            min: Number;
            max: Number;
        },
    };
    properties?: any;
}
