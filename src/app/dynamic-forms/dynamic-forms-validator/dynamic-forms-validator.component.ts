import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation
} from '@angular/core';

import {
    NgForm,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

import { DynamicControlSchema } from '../interfaces/dynamic-control-schema.interface';

@Component({
    selector: 'dynamic-forms-validator',
    templateUrl: './dynamic-forms-validator.component.html',
    styleUrls: [ './dynamic-forms-validator.component.css' ],
    encapsulation: ViewEncapsulation.Emulated
})

export class DynamicFormsValidatorComponent implements OnInit {
    @Input() group: FormGroup;
    @Input() config: DynamicControlSchema;
    @Input() formObj: NgForm;

    constructor() { }

    ngOnInit() {
    }
}
