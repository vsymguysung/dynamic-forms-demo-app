import {
    Component,
    forwardRef,
    OnInit,
    ElementRef,
    ViewEncapsulation
} from '@angular/core';

import {
    NgForm,
    FormGroup,
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

import { DynamicControlSchema } from '../interfaces/dynamic-control-schema.interface';

@Component({
    selector: 'dynamic-forms-control',
    templateUrl: './dynamic-forms-control.component.html',
    styleUrls: [ './dynamic-forms-control.component.css' ],
    encapsulation: ViewEncapsulation.Emulated
})

export class DynamicFormsControlComponent implements OnInit {
    public formGroup: FormGroup;
    public controlSchema: DynamicControlSchema;
    public formObject: NgForm;

    constructor() { }

    private getClasses(): string  {
        const defaultClass = 'form-control'; // For Bootstrap 3

        if (this.controlSchema.classes && ( typeof this.controlSchema.classes === "string" )) {
            return this.controlSchema.classes.concat(" " + defaultClass);
        }
        else {
            return defaultClass;
        }
    }

    ngOnInit(): void {
    }
}
