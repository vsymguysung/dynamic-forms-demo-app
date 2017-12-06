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

import { DynamicFormsControlComponent } from '../dynamic-forms-control/dynamic-forms-control.component';
import { DynamicControlSchema } from '../interfaces/dynamic-control-schema.interface';

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

    buttonLabel: string;

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
        if ( this._formSchema ) {
             this.formContainer.clear();
             this._formSchema.forEach( (controlSchema: DynamicControlSchema) => {
                if ( controlSchema.type !== 'submit' ) {
                    this.form.addControl( controlSchema.name, this.instantiateControl( controlSchema ) );
                    this.injectControl( controlSchema, this.form, this.formObject );
                }
            });
        }
    }

    ngOnInit() {
        const button = this._formSchema.find( (controlSchema: DynamicControlSchema) => {
            return controlSchema.type === 'submit';
        });

        if ( button ) {
            this.buttonLabel = button.label;
        }
    }

    private instantiateControl( controlSchema: DynamicControlSchema ): FormControl {
        let formControl = new FormControl();

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
    
}
