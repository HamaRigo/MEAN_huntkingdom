import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLocalisationComponent } from './detail-localisation.component';

describe('DetailLocalisationComponent', () => {
  let component: DetailLocalisationComponent;
  let fixture: ComponentFixture<DetailLocalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLocalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
