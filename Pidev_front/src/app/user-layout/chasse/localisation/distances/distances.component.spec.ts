import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistancesComponent } from './distances.component';

describe('DistancesComponent', () => {
  let component: DistancesComponent;
  let fixture: ComponentFixture<DistancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
