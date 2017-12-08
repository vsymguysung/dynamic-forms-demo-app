import {
    Component,
    ComponentRef,
    OnInit,
    OnChanges,
    Input,
    Output, 
    EventEmitter,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
    ComponentFactoryResolver
} from '@angular/core';

import {
    NgForm,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

import { DynamicControlSchema } from '../interfaces/dynamic-control-schema.interface';
import { DynamicFormsControlComponent } from '../dynamic-forms-control/dynamic-forms-control.component';

@Component({
    selector: 'dynamic-forms',
    templateUrl: './dynamic-forms.component.html',
    styleUrls: [ './dynamic-forms.component.css' ],
    encapsulation: ViewEncapsulation.Emulated
})

export class DynamicFormsComponent implements OnChanges, OnInit {

    private form: FormGroup;

    private cfr: ComponentFactoryResolver;

    private _formSchema: DynamicControlSchema[];

    private buttonLabel: string;

    @Input() set formSchema( value: DynamicControlSchema[] ) {
        this._formSchema= value;
    }

    @Output() formSubmit: EventEmitter<any>;

    @ViewChild( 'container', { read: ViewContainerRef } ) formContainer: ViewContainerRef;

    @ViewChild( 'formObj' ) formObject: NgForm;

    onSubmit() {
        this.formSubmit.emit( this.form.value );
    }

    constructor( cfr: ComponentFactoryResolver ) {
        this.cfr = cfr;
        this.form = new FormGroup({});
        this.formSubmit = new EventEmitter<any>();
    }

    ngOnChanges() {
        if (this._formSchema) {
            this.formContainer.clear();
            this._formSchema.forEach( ( controlSchema: DynamicControlSchema ) => {
                this.validateControlSchema( controlSchema );
                if (controlSchema.type !== 'submit') {
                    this.form.addControl( controlSchema.name, this.instantiateControl( controlSchema ) );
                    this.injectControl( controlSchema, this.form, this.formObject );
                }
            });
        }
    }

    ngOnInit() {
        const button = this._formSchema.find( ( controlSchema: DynamicControlSchema ) => {
            return controlSchema.type === 'submit';
        });

        if (button) {
            this.buttonLabel = button.label;
        }
    }

    private validateControlSchema( controlSchema: DynamicControlSchema ) {
        /*
         *  ToDO: Validation Check on the Control Schema will be put in here
         */
    }

    private instantiateControl( controlSchema: DynamicControlSchema ): FormControl {
        let formControl = new FormControl();

        if (controlSchema.hasOwnProperty( 'validate' )) {
            formControl = this.setValidators( formControl, controlSchema.validate );
        }

        return formControl;
    }

    private configControlInstance( control: ComponentRef<DynamicFormsControlComponent>,
                                   form: FormGroup,
                                   formObject: NgForm,
                                   controlSchema: DynamicControlSchema ): void {
        control.instance.formGroup = this.form;
        control.instance.formObject = this.formObject;
        control.instance.controlSchema = controlSchema;
    }

    private injectControl( controlSchema: DynamicControlSchema,
                           form: FormGroup,
                           formObject: NgForm ): void {
        const factory = this.cfr.resolveComponentFactory( DynamicFormsControlComponent );
        const control = this.formContainer.createComponent( factory );
        this.configControlInstance( control, form, formObject, controlSchema );
    }

    private setValidators( control: FormControl, validate: any ): FormControl {
        const validators = [];

        if (validate.hasOwnProperty( 'required' ) && validate.required === true) {
            validators.push( Validators.required );
        }

        if (validate.hasOwnProperty( 'minLength' )) {
            validators.push( Validators.minLength( validate.minLength ) );
        }

        if (validate.hasOwnProperty( 'maxLength' )) {
            validators.push( Validators.maxLength( validate.maxLength ) );
        }

        if (validate.hasOwnProperty( 'min' )) {
            validators.push( Validators.min( validate.min ) );
        }

        if (validate.hasOwnProperty( 'max' )) {
            validators.push( Validators.max( validate.max ) );
        }

        control.setValidators( validators );
        control.updateValueAndValidity();

        return control;
    }
}
