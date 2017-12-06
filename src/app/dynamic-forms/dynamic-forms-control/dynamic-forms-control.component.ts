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
    formGroup: FormGroup;
    controlSchema: DynamicControlSchema;
    formObject: NgForm;

    constructor() { }

    ngOnInit(): void {
    }
}
