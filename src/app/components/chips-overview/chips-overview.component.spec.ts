import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsOverviewComponent } from './chips-overview.component';

describe('ChipsOverviewComponent', () => {
  let component: ChipsOverviewComponent;
  let fixture: ComponentFixture<ChipsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
