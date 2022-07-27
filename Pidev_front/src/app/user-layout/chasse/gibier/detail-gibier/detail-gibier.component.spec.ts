import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGibierComponent } from './detail-gibier.component';

describe('DetailGibierComponent', () => {
  let component: DetailGibierComponent;
  let fixture: ComponentFixture<DetailGibierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailGibierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGibierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
