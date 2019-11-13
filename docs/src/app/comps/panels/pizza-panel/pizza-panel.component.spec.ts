import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPanelComponent } from './pizza-panel.component';

describe('PizzaPanelComponent', () => {
  let component: PizzaPanelComponent;
  let fixture: ComponentFixture<PizzaPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
