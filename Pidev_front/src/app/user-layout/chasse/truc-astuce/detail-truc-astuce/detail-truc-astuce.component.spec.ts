import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTrucAstuceComponent } from './detail-truc-astuce.component';

describe('DetailTrucAstuceComponent', () => {
  let component: DetailTrucAstuceComponent;
  let fixture: ComponentFixture<DetailTrucAstuceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTrucAstuceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTrucAstuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
