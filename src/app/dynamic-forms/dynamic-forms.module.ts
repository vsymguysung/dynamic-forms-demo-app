import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';

import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

import { DynamicFormsControlComponent } from './dynamic-forms-control/dynamic-forms-control.component';

import { RequiredFieldIndicatorDirective } from './directives/required-field-indicator.directive';

import { DynamicFormsValidatorComponent } from './dynamic-forms-validator/dynamic-forms-validator.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [ DynamicFormsComponent, DynamicFormsControlComponent, RequiredFieldIndicatorDirective ],
    declarations: [ DynamicFormsComponent, DynamicFormsControlComponent, RequiredFieldIndicatorDirective, DynamicFormsValidatorComponent ],
    entryComponents: [ DynamicFormsComponent, DynamicFormsControlComponent ]
})

export class DynamicFormsModule { }
