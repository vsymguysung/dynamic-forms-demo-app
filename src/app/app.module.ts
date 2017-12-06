import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DynamicFormsModule } from './dynamic-forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DynamicFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
