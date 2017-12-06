import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsControlComponent } from './dynamic-forms-control.component';

describe('DynamicFormsControlComponent', () => {
  let component: DynamicFormsControlComponent;
  let fixture: ComponentFixture<DynamicFormsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
