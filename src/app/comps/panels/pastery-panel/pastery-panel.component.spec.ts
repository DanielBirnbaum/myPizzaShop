import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteryPanelComponent } from './pastery-panel.component';

describe('PasteryPanelComponent', () => {
  let component: PasteryPanelComponent;
  let fixture: ComponentFixture<PasteryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
