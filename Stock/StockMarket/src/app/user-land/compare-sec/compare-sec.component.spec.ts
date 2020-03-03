import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareSecComponent } from './compare-sec.component';

describe('CompareSecComponent', () => {
  let component: CompareSecComponent;
  let fixture: ComponentFixture<CompareSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
