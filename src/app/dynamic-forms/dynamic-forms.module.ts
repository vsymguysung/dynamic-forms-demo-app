import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';

import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

import { DynamicFormsControlComponent } from './dynamic-forms-control/dynamic-forms-control.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [ DynamicFormsComponent, DynamicFormsControlComponent ],
    declarations: [ DynamicFormsComponent, DynamicFormsControlComponent ],
    entryComponents: [ DynamicFormsComponent, DynamicFormsControlComponent ]
})

export class DynamicFormsModule { }
