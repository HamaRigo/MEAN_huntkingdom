import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GibierComponent } from './gibier.component';

describe('GibierComponent', () => {
  let component: GibierComponent;
  let fixture: ComponentFixture<GibierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GibierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GibierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
