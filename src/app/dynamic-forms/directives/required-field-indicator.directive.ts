import {
    Directive,
    ElementRef,
    OnInit,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[requiredFieldIndicator]'
})

export class RequiredFieldIndicatorDirective implements OnInit {

    @Input() requiredFieldIndicator: any;

    @HostBinding('class') elemClass: string;

    constructor() { }

    ngOnInit(): void {
        if (this.requiredFieldIndicator &&
            this.requiredFieldIndicator.hasOwnProperty('required') &&
            this.requiredFieldIndicator.required === true) {
            this.elemClass = 'required';
        }
    }
}
