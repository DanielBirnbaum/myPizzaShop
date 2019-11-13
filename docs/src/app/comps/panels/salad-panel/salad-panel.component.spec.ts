import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidPanelComponent } from './solid-panel.component';

describe('SolidPanelComponent', () => {
  let component: SolidPanelComponent;
  let fixture: ComponentFixture<SolidPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
