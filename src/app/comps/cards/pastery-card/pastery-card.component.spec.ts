import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteryCardComponent } from './pastery-card.component';

describe('PasteryCardComponent', () => {
  let component: PasteryCardComponent;
  let fixture: ComponentFixture<PasteryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
