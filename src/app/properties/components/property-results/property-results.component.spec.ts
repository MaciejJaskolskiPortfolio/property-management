import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyResultsComponent } from './property-results.component';

describe('PropertyResultsComponent', () => {
  let component: PropertyResultsComponent;
  let fixture: ComponentFixture<PropertyResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyResultsComponent]
    });
    fixture = TestBed.createComponent(PropertyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
