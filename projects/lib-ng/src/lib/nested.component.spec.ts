import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NestedComponent } from './nested.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NestedComponent', () => {
  let component: NestedComponent;
  let fixture: ComponentFixture<NestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show default dropdown', () => {
    fixture.detectChanges();
    console.log(fixture.nativeElement.querySelector('x-dropdown').shadowRoot);
    expect(fixture.nativeElement.querySelector('x-dropdown')).toBeTruthy();
  });
});
