import {
    Component,
    ViewEncapsulation
} from '@angular/core';

/* Import DynamicForms module */
import {
    DynamicControlSchema,
    DynamicFormsUtilsService
} from './dynamic-forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers:[ DynamicFormsUtilsService ]
})

export class AppComponent {
    title = 'dynamic-forms demo app';

    formValues: object;

    unFlattenFormValues: object;

    formSchema: DynamicControlSchema[];

    constructor( private dynamicFormsUtils: DynamicFormsUtilsService ) {
        this.formSchema = [
            {
                type: 'text',
                name: 'main__customStylesheetID[0]',
                label: 'Custom Stylesheet ID',
                placeholder: 'Type Id',
                classes: "css-sel1 css-sel2",
                style: { "max-width": "300px" },
                validate: {
                    required: true,
                    minLength: 0,
                    maxLength: 255
                }
            },
            {
                type: 'checkbox',
                name: 'main__debug',
                label: 'Debug',
                validate: {
                    required: true
                }
            },
            {
                type: 'submit',
                label: 'Print to Console'
            }
        ];
    }

    onSubmit( event: any ) {
        console.log('form submitted...');
        this.formValues = event;
        console.log('Flatten', JSON.stringify(this.formValues, null, 4));

        this.unFlattenFormValues = this.dynamicFormsUtils.unflattenObj(event);
        console.log('Unflatten:', JSON.stringify(this.unFlattenFormValues, null, 4));

        let flattenAgain = this.dynamicFormsUtils.flattenObj(this.unFlattenFormValues);
        console.log('Flatten Again:', JSON.stringify(flattenAgain, null, 4));
    }
 
}
