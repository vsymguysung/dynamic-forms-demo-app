import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsValidatorComponent } from './dynamic-forms-validator.component';

describe('DynamicFormsValidatorComponent', () => {
  let component: DynamicFormsValidatorComponent;
  let fixture: ComponentFixture<DynamicFormsValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormsValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
