import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucAstuceComponent } from './truc-astuce.component';

describe('TrucAstuceComponent', () => {
  let component: TrucAstuceComponent;
  let fixture: ComponentFixture<TrucAstuceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrucAstuceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucAstuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
