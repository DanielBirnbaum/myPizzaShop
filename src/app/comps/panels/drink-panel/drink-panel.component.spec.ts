import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkPanelComponent } from './drink-panel.component';

describe('DrinkPanelComponent', () => {
  let component: DrinkPanelComponent;
  let fixture: ComponentFixture<DrinkPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
